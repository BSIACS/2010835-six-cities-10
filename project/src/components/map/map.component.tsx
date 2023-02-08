/* eslint-disable no-console */
import { MutableRefObject, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { cityFactory } from '../../utils/utils';


/*
*Map component
*/
export function MapComponent(): JSX.Element {
  const mapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  const map = useMap(mapRef, selectedCity);

  useEffect(() => {
    console.log('MapComponent: component did mount');
  }, []);

  useEffect(() => {
    console.log('MapComponent: component did update. <selectedCity> changed');
    const actualCityData = cityFactory(selectedCity);
    map?.setView([actualCityData.location.latitude, actualCityData.location.longitude], 13);
  }, [map, selectedCity]);

  return (
    <div className="cities__right-section">
      <section className="cities__map" ref={mapRef}></section>
    </div>
  );
}
