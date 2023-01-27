import { CitiesEnum } from './cities.enum';
import { Location } from './location';

export class City{
  name: CitiesEnum;
  location: Location;

  constructor(name: CitiesEnum, location: Location){
    this.name = name;
    this.location = location;
  }
}
