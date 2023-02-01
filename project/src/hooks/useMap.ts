import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer, Marker, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';


export function useMap(mapContainerRef: MutableRefObject<HTMLDivElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isAlreadyCalled: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    if(isAlreadyCalled.current){
      return;
    }

    isAlreadyCalled.current = true;

    if(mapContainerRef.current !== null && map === null){
      const instance = new Map(
        mapContainerRef.current as HTMLElement,
        {
          center: {
            lat: 52.37454,
            lng: 4.897976
          },
          zoom: 14
        }
      );

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      new Marker({lat: 52.37454, lng: 4.897976}).setIcon(new Icon({
        iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40]})).addTo(instance);

      setMap(instance);
    }
  }, []);

  return map;
}

