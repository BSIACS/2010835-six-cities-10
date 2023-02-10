import { MutableRefObject, useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { cityFactory } from '../../utils/utils';
import { Icon, Marker } from 'leaflet';
import { Offer } from '../../types/offer';

/*
*Map component
*/
export function MapComponent(): JSX.Element {
  const mapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  const offersToShow: Offer[] = useSelector((state: RootState) => state.application.offersToShow);
  const map = useMap(mapRef);
  const [actualMarkers, setActualMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    const actualCityData = cityFactory(selectedCity);
    map?.setView([actualCityData.location.latitude, actualCityData.location.longitude], 13);

    actualMarkers.forEach((marker) => {
      map?.removeLayer(marker);
    });
    setActualMarkers([]);

    if (map !== null) {
      const newMarkers: Marker[] = [];

      offersToShow.map((offer) => {
        const marker = new Marker({ lat: offer.location.latitude, lng: offer.location.longitude }).setIcon(new Icon({
          iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        })).addTo(map);

        newMarkers.push(marker);

        return offer;
      });
      setActualMarkers(newMarkers);
    }

  }, [selectedCity, map]);

  return (
    <div className="cities__right-section">
      <section className="cities__map" ref={mapRef}></section>
    </div>
  );
}
