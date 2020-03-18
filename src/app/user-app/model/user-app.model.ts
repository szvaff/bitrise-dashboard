export class UserAppResponse {
  data: Array<UserApp>;
}

export class UserApp {
  owner: {
    name: string;
  };
  title: string;

  constructor(userApp: UserApp) {
    Object.assign(this, userApp);
  }

  get ownerName() {
    return this.owner.name;
  }
}
