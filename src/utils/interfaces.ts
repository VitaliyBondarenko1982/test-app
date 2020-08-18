export interface UserI {
  id: string | number;
  name: string;
  surname: string;
  desc: string;
}

export interface State {
  users: UserI[];
  loading: boolean;
}
