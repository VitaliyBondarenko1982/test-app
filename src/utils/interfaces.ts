export interface UserI {
  id: number;
  name: string;
  surname: string;
  desc: string;
}

export interface State {
  users: UserI[];
  loading: boolean;
  newUser: NewUser;
}

export interface NewUser {
  name: string;
  surname: string;
  desc: string;
}

export interface Control {
  value: string;
  label: string;
  name: string;
  errorMessage: string;
  valid: boolean;
  touched: boolean;
  validation?: Validation;
}

export interface Validation {
  required: boolean;
  minLength?: number;
}
