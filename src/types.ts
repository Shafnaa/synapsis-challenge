export type post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type user = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type comment = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
