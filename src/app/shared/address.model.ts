export class Address {
  public city: string;
  public street: string;
  public building: number;



  constructor(city: string, street: string, building: number) {
    this.city = city;
    this.street = street;
    this.building = building;
  }
}
