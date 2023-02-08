const ACTIVE_ITEM_CLASS_NAME = 'locations__item-link tabs__item tabs__item--active';
const ITEM_CLASS_NAME = 'locations__item-link tabs__item';

type CityTabItemProps = {
  cityName: string;
  isActive: boolean;
  onClickHandler: (evt : React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/*
*City tab item component
*/
export function CityTabItemComponent({cityName, isActive, onClickHandler}: CityTabItemProps): JSX.Element {
  const itemClassName = isActive ? ACTIVE_ITEM_CLASS_NAME : ITEM_CLASS_NAME;

  return (
    <li className="locations__item">
      <div className={itemClassName} data-city-name={cityName} onClick={onClickHandler}>
        <span>{cityName}</span>
      </div>
    </li>
  );
}
