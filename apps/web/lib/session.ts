import { UserSignInSocial } from '../types';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { SWIPE_BACKEND_URL } from './utils';
import { toast } from '@swipe-app/shared-ui';

export async function getCurrentUser() {
  return axios
    .get(`${SWIPE_BACKEND_URL}/auth/me`, { withCredentials: true })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
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

export async function signIn(
  signInType: UserSignInSocial,
  params: SignInParamsType
) {
  const { email, password } = params;
  const userData: FetchedUserDataType = {
    ok: false,
    data: null,
    error: null,
  };

  const signInObj = {
    email: () =>
      axios.post(
        `${SWIPE_BACKEND_URL}/auth/email/login`,
        { email, password },
        { withCredentials: true }
      ),
    github: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/github/login`, {
        email,
        password,
      }),
    google: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/google/login`, {
        email,
        password,
      }),
    facebook: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/facebook/login`, {
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
      axios.post(`${SWIPE_BACKEND_URL}/auth/email/register`, {
        email,
        password,
      }),
    github: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/github/register`, {
        email,
        password,
      }),
    google: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/google/register`, {
        email,
        password,
      }),
    facebook: () =>
      axios.post(`${SWIPE_BACKEND_URL}/auth/facebook/register`, {
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

export async function signOut() {
  return axios
    .post(`${SWIPE_BACKEND_URL}/auth/logout`, {}, { withCredentials: true })
    .then((response) => {
      toast({
        title: 'Shame :(',
        description: 'You successfully logged out.',
      });
      return response;
    })
    .catch((error) => {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
      throw new Error(error);
    });
}

export async function signBackIn() {
  return axios
    .get(`${SWIPE_BACKEND_URL}/auth/me`, { withCredentials: true })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
}
