/* eslint-disable no-console */
import { MutableRefObject, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';


/*
*Map component
*/
export function MapComponent(): JSX.Element {
  const mapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useMap(mapRef);


  useEffect(() => {
    console.log('MapComponent: component did mount');
  }, []);

  return (
    <div className="cities__right-section">
      <section className="cities__map" ref={mapRef}></section>
    </div>
  );
}
