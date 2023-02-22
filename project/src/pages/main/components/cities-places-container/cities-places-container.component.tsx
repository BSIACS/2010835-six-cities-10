/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux';
import { MapComponent } from '../../../../components/map/map.component';
import { PlaceCardComponent } from '../../../../components/place-card/place-card.component';
import { RootState } from '../../../../store/store';
import { Offer } from '../../../../types/offer';
import { SortByFormComponent } from './sort-by-form/sort-by-form.component';

/**Cities places container component*/
export function CitiesPlacesContainerComponent(): JSX.Element {
  const offers: Offer[] = useSelector((state: RootState) => state.application.offers);
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  console.log(`SelectedCity ${selectedCity}`);
  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity);
  const offersCount = filteredOffers.length;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {selectedCity}</b>
        <SortByFormComponent/>
        <div className="cities__places-list places__list tabs__content">
          {filteredOffers.map((offer) => (<PlaceCardComponent key={offer.id} offer={offer}/>))}
        </div>
      </section>
      {<MapComponent offersToShow={filteredOffers} selectedCity={selectedCity}/>}
    </div>
  );
}
