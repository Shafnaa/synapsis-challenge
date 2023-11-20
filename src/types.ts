export type postType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type userType = {
  id?: number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
};

export type commentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
