import { faker } from '@faker-js/faker';
import { Mappable } from './interfaces/Mappable';

export class User implements Mappable {
  firstName: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    Firstname: ${this.firstName} <br>
    Lastname: ${this.lastName} <br>
    Latitude: ${this.location.lat} <br>
    Longitude: ${this.location.lng}
    `;
  }
}
