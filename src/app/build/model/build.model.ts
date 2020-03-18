export class Build {
  repository: {
    title: string;
    owner: {
      name: string;
    };
  };
  // tslint:disable-next-line: variable-name
  triggered_at: string;
  slug: string;
  status: BuildStatus;

  constructor(build: Build) {
    Object.assign(this, build);
  }

  get owner() {
    return this.repository.owner.name;
  }

  get appTitle() {
    return this.repository.title;
  }
}

export enum BuildStatus {
  IN_PROGRESS = 0,
  SUCCESS = 1,
  FAILED = 2,
  ABORTED_WITH_FAILURE = 3,
  ABORTED_WITH_SUCCESS = 4
}

export class BuildResponse {
  data: Array<Build>;
}
