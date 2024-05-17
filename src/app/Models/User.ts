export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}
