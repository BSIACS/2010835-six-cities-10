/* eslint-disable no-console */
import { MutableRefObject, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { cityFactory } from '../../utils/utils';
import { Icon, Marker } from 'leaflet';
import { Offer } from '../../types/offer';
import { CitiesEnum } from '../../types/cities.enum';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type MapComponentProps = {
  offersToShow: Offer[];
  selectedCity: CitiesEnum;
}

/*
*Map component
*/
export function MapComponent({offersToShow, selectedCity}: MapComponentProps): JSX.Element {
  const mapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const hoveredPlaceCardId = useSelector((state: RootState) => state.application.hoveredPlaceCardId);
  const map = useMap(mapRef);
  const actualMarkers: MutableRefObject<Marker[]> = useRef([]);
  const actualCityData = cityFactory(selectedCity);

  map?.setView([actualCityData.location.latitude, actualCityData.location.longitude], 13);

  actualMarkers.current?.forEach((marker) => {
    map?.removeLayer(marker);
  });
  actualMarkers.current = [];

  if (map !== null) {
    const newMarkers: Marker[] = [];

    offersToShow.map((offer) => {
      const marker = new Marker({ lat: offer.location.latitude, lng: offer.location.longitude }).setIcon(new Icon({
        iconUrl: `http://localhost:9999/img/pin${hoveredPlaceCardId === offer.id ? '-active' : ''}.svg`,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
      })).addTo(map);

      newMarkers.push(marker);

      return offer;
    });
    actualMarkers.current = newMarkers;
  }

  return (
    <div className="cities__right-section">
      <section className="cities__map" ref={mapRef}></section>
    </div>
  );
}
