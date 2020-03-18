export class OrganizationResponse {
  data: Array<Organization>;
}

export class Organization {
  name?: string;
  slug: string;

  constructor(org: Organization) {
    Object.assign(this, org);
  }
}
