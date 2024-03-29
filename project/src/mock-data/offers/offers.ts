import { CitiesEnum } from '../../types/cities.enum';
import { City } from '../../types/city';
import { Host } from '../../types/host';
import { HousingTypeEnum } from '../../types/housing.enum';
import { Location } from '../../types/location';
import { Offer } from '../../types/offer';

/**
 * Mock offer data
 */
export const offersMockData : Offer[] = [
  {
    id: 1,
    city: {
      name: CitiesEnum.DUSSELDORF,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      } as Location
    } as City,
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    type: HousingTypeEnum.HOTEL,
    bedrooms: 2,
    maxAdults: 5,
    price: 393,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    } as Host,
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    } as Location,
  },
  {
    id: 2,
    city: {
      name: CitiesEnum.PARIS,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      } as Location
    } as City,
    previewImage: 'https://10.react.pages.academy/static/hotel/19.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/18.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    type: HousingTypeEnum.HOUSE,
    bedrooms: 2,
    maxAdults: 3,
    price: 654,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    } as Host,
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 48.843610000000005,
      longitude: 2.338499,
      zoom: 16
    } as Location,
  },
  {
    id: 3,
    city: {
      name: CitiesEnum.HAMBURG,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      } as Location
    } as City,
    previewImage: 'https://10.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    isPremium: false,
    rating: 3,
    type: HousingTypeEnum.HOUSE,
    bedrooms: 4,
    maxAdults: 8,
    price: 198,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    } as Host,
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 53.534341000000005,
      longitude: 9.998654,
      zoom: 16
    } as Location,
  },
  {
    id: 4,
    city: {
      name: CitiesEnum.COLOGNE,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      } as Location
    } as City,
    previewImage: 'https://10.react.pages.academy/static/hotel/4.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg'
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
    type: HousingTypeEnum.HOUSE,
    bedrooms: 3,
    maxAdults: 8,
    price: 853,
    goods: [
      'Dishwasher',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Washer',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    } as Host,
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    } as Location,
  },
];

