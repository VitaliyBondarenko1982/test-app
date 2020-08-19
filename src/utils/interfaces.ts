export interface NewUser {
  name: string;
  surname: string;
  desc: string;
}

export interface UserI extends NewUser{
  id: number;
}

export interface State {
  users: UserI[];
  loading: boolean;
  editing: false;
  newUser: NewUser;
  editUser: UserI;
}
