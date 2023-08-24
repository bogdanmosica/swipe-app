export interface IPost {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  published: string;
}

export interface ISession {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: IUser;
}

export interface IAccount {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: Date;
  token_type: string;
  scope: string;
  id_token: string;
  session_state: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  accounts: IAccount[];
  sessions: ISession[];
  Post: IPost[];
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripePriceId: string;
  stripeCurrentPeriodEnd: Date;
}
