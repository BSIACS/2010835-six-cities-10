import { Amsterdam, Brussels, Cologne, Dusseldorf, Hamburg, Paris } from '../constants/cities.constants';
import { CitiesEnum } from '../types/cities.enum';
import { City } from '../types/city';

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function cityFactory(cityName: string): City {
  switch (cityName) {
    case CitiesEnum.PARIS:
      return Paris;
    case CitiesEnum.COLOGNE:
      return Cologne;
    case CitiesEnum.BRUSSELS:
      return Brussels;
    case CitiesEnum.AMSTERDAM:
      return Amsterdam;
    case CitiesEnum.HAMBURG:
      return Hamburg;
    case CitiesEnum.DUSSELDORF:
      return Dusseldorf;
    default:
      throw new Error();
  }
}
