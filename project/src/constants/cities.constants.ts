import { CitiesEnum } from '../types/cities.enum';
import { City } from '../types/city';
import { Location } from '../types/location';

export const Paris = {
  name: CitiesEnum.PARIS,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  } as Location
} as City;

export const Cologne = {
  name: CitiesEnum.COLOGNE,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  } as Location
} as City;

export const Brussels = {
  name: CitiesEnum.BRUSSELS,
  location: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  } as Location
} as City;

export const Amsterdam = {
  name: CitiesEnum.AMSTERDAM,
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  } as Location
} as City;

export const Hamburg = {
  name: CitiesEnum.HAMBURG,
  location: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  } as Location
} as City;

export const Dusseldorf = {
  name: CitiesEnum.DUSSELDORF,
  location: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  } as Location
} as City;
