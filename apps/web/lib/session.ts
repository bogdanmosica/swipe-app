import { UserSignInSocial } from '../types';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { SWIPE_API_URL } from './utils';
import Router from 'next/router';

export async function getCurrentUser() {
  //const session = await getServerSession(authOptions);
  //return session?.user;
}

type FetchedUserDataType = {
  ok: boolean;
  data: AxiosResponse | null;
  error: AxiosError | null;
};

type SignUpParamsType = {
  email: string;
  password: string;
};

type SignInParamsType = {
  email: string;
  password: string;
};

export function signIn(signInType: UserSignInSocial, params: SignInParamsType) {
  const { email, password } = params;
  const userData: FetchedUserDataType = {
    ok: false,
    data: null,
    error: null,
  };

  const signInObj = {
    email: () =>
      axios.post(`${SWIPE_API_URL}/auth/email/login`, { email, password }),
    github: () =>
      axios.post(`${SWIPE_API_URL}/auth/github/login`, {
        email,
        password,
      }),
    google: () =>
      axios.post(`${SWIPE_API_URL}/auth/google/login`, {
        email,
        password,
      }),
    facebook: () =>
      axios.post(`${SWIPE_API_URL}/auth/facebook/login`, {
        email,
        password,
      }),
  };

  const signInObjPromise = signInObj[signInType]();
  return signInObjPromise
    .then((response) => {
      userData.ok = true;
      userData.data = response;
      return userData;
    })
    .catch((error) => {
      userData.error = error?.response?.data;
      return userData;
    });
}

export async function signUp(
  signInType: UserSignInSocial,
  params: SignUpParamsType
): Promise<FetchedUserDataType> {
  const { email, password } = params;
  const userData: FetchedUserDataType = {
    ok: false,
    data: null,
    error: null,
  };

  const signInObj = {
    email: () =>
      axios.post(`${SWIPE_API_URL}/auth/email/register`, { email, password }),
    github: () =>
      axios.post(`${SWIPE_API_URL}/auth/github/register`, {
        email,
        password,
      }),
    google: () =>
      axios.post(`${SWIPE_API_URL}/auth/google/register`, {
        email,
        password,
      }),
    facebook: () =>
      axios.post(`${SWIPE_API_URL}/auth/facebook/register`, {
        email,
        password,
      }),
  };

  const signInObjPromise = signInObj[signInType]();
  return signInObjPromise
    .then((response) => {
      userData.ok = true;
      userData.data = response;
      return userData;
    })
    .catch((error) => {
      userData.error = error?.response?.data;
      return userData;
    });
}
