import { faker } from '@faker-js/faker';
import { Mappable } from './interfaces/Mappable';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    ${this.name} <br>
    ${this.catchPhrase} <br>
    Latitude: ${this.location.lat} <br>
    Longitude: ${this.location.lng}
    `;
  }
}
