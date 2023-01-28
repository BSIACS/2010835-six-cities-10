import { City } from './city';
import { Host } from './host';
import { HousingTypeEnum } from './housing.enum';
import { Location } from './location';

export class Offer{
  id: number;
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: HousingTypeEnum;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;


  constructor(
    id: number,
    city: City,
    previewImage: string,
    images: string,
    title: string,
    isFavorite: boolean,
    isPremium: boolean,
    rating: number,
    type: HousingTypeEnum,
    bedrooms: number,
    maxAdults: number,
    price: number,
    goods: string[],
    host: Host,
    description: string,
    location: Location,
  ){
    this.id = id;
    this.city = {...city, location: {...city.location}} as City;
    this.previewImage = previewImage;
    this.images = [...images];
    this.title = title;
    this.isFavorite = isFavorite;
    this.isPremium = isPremium;
    this.rating = rating;
    this.type = type;
    this.bedrooms = bedrooms;
    this.maxAdults = maxAdults;
    this.price = price;
    this.goods = [...goods];
    this.host = {...host};
    this.description = description;
    this.location = {...location};
  }
}
