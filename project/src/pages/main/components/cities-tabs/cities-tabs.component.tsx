import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setActualCity } from '../../../../store/slices/application.slice';
import { RootState } from '../../../../store/store';
import { CitiesEnum } from '../../../../types/cities.enum';


/*
*Cities tabs component
*/
export function CitiesTabsComponent(): JSX.Element {
  const selectedCity = useSelector((state: RootState) => state.application.selectedCity);
  const dispatch = useDispatch();

  const handleLocationItemClick = (evt : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!evt.currentTarget.dataset.city){
      throw new Error();
    }

    const newSelectedCity = CitiesEnum[evt.currentTarget.dataset.city.toUpperCase() as keyof typeof CitiesEnum ] as CitiesEnum;

    dispatch(setActualCity(newSelectedCity));
  };

  return (
    <section className="locations container">
      <div>{selectedCity}</div>
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <div className="locations__item-link tabs__item" data-city={CitiesEnum.PARIS} onClick={handleLocationItemClick}>
            <span>Paris</span>
          </div>
        </li>
        <li className="locations__item">
          <div className="locations__item-link tabs__item" data-city={CitiesEnum.COLOGNE} onClick={handleLocationItemClick}>
            <span>Cologne</span>
          </div>
        </li>
        <li className="locations__item">
          <div className="locations__item-link tabs__item" data-city={CitiesEnum.BRUSSELS} onClick={handleLocationItemClick}>
            <span>Brussels</span>
          </div>
        </li>
        <li className="locations__item">
          <div className="locations__item-link tabs__item" data-city={CitiesEnum.AMSTERDAM} onClick={handleLocationItemClick}>
            <span>Amsterdam</span>
          </div>
        </li>
        <li className="locations__item">
          <div className="locations__item-link tabs__item" data-city={CitiesEnum.HAMBURG} onClick={handleLocationItemClick}>
            <span>Hamburg</span>
          </div>
        </li>
        <li className="locations__item">
          <div className="locations__item-link tabs__item tabs__item--active" data-city={CitiesEnum.DUSSELDORF} onClick={handleLocationItemClick}>
            <span>Dusseldorf</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
