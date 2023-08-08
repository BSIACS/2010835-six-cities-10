/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { shallowEqual, useSelector } from 'react-redux';
import { MapComponent } from '../../../../components/map/map.component';
import { PlaceCardComponent } from '../../../../components/place-card/place-card.component';
import { RootState } from '../../../../store/store';
import { Offer } from '../../../../types/offer';
import { SortByFormComponent } from './sort-by-form/sort-by-form.component';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { SortByEnum } from '../../../../types/sort-by.enum';

const getFilteredOffers = (state: RootState) => {
  let filteredOffers = state.application.offers.filter((offer) => offer.city.name === state.application.selectedCity);

  switch (state.application.sortBy) {
    case SortByEnum.PRICE_LOW_TO_HIGH:
      filteredOffers = filteredOffers.sort((a, b) => a.price - b.price);
      break;
    case SortByEnum.PRICE_HIGH_TO_LOW:
      filteredOffers = filteredOffers.sort((a, b) => b.price - a.price);
      break;
    case SortByEnum.TOP_RATED_FIRST:
      filteredOffers = filteredOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return filteredOffers;
};

/**Cities places container component*/
export function CitiesPlacesContainerComponent(): JSX.Element {
  const offers: Offer[] = useAppSelector(getFilteredOffers, shallowEqual);
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  const offersCount = offers.length;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {selectedCity}</b>
        <SortByFormComponent />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (<PlaceCardComponent key={offer.id} offer={offer} />))}
        </div>
      </section>
      {<MapComponent offersToShow={offers} selectedCity={selectedCity} />}
    </div>
  );
}
