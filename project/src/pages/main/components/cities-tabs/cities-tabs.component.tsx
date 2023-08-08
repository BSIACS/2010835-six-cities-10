/* eslint-disable no-console */
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setActualCity } from '../../../../store/slices/application.slice';
import { RootState } from '../../../../store/store';
import { CitiesEnum } from '../../../../types/cities.enum';
import { CityTabItemComponent } from './city-tab-item/city-tab-item.component';

/*
*Cities tabs component
*/
export function CitiesTabsComponent(): JSX.Element {
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  const dispatch = useDispatch();

  const handleLocationItemClick = (evt : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!evt.currentTarget.dataset.cityName){
      throw new Error();
    }

    const newSelectedCity = CitiesEnum[evt.currentTarget.dataset.cityName.toUpperCase() as keyof typeof CitiesEnum ] as CitiesEnum;

    dispatch(setActualCity(newSelectedCity));
  };

  const cityNames = Object.values(CitiesEnum);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityNames.map((cityName) => <CityTabItemComponent key={cityName} cityName={cityName} isActive={selectedCity === cityName} onClickHandler={handleLocationItemClick}/>)}
      </ul>
    </section>
  );
}
