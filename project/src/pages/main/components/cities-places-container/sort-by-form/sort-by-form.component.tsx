/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import styles from './css/places-sorting-form.module.css';
import { SortByListItemComponent } from './sort-by-list-item/sort-by-list-item.component';

/**Places sorting form component*/
export function SortByFormComponent(): JSX.Element {
  const actualSortByValue = useSelector((state: RootState) => state.application.sortBy);
  const [ulDisplayStateCSS, setUlDisplayStateCSS] = useState(styles['places-options-closed']);
  const sortListIsClosedCSSClass = styles['places-options-closed'];
  const sortListIsOpenedCSSClass = styles['places-options-opened'];

  const handleSortListClick = (evt: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    if(ulDisplayStateCSS === sortListIsClosedCSSClass){
      setUlDisplayStateCSS(sortListIsOpenedCSSClass);
    }
    else if(ulDisplayStateCSS === sortListIsOpenedCSSClass){
      setUlDisplayStateCSS(sortListIsClosedCSSClass);
    }
  };

  const onListItemClickHandler = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setUlDisplayStateCSS(sortListIsClosedCSSClass);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&emsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {actualSortByValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${ulDisplayStateCSS}`} >
        <li className="places__option" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
        <SortByListItemComponent textContent={'Popular'} handleOnclick={onListItemClickHandler}/>
      </ul>
    </form>
  );
}
