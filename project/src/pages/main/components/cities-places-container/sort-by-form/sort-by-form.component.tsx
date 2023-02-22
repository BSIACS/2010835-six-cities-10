import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setIsSortFormOpened, setSortByValue } from '../../../../../store/slices/application.slice';
import { RootState } from '../../../../../store/store';
import { SortByEnum } from '../../../../../types/sort-by.enum';
import styles from './css/places-sorting-form.module.css';
import { SortByListItemComponent } from './sort-by-list-item/sort-by-list-item.component';

/*
*Sort by form component
*/
export function SortByFormComponent(): JSX.Element {
  const actualSortByValue = useSelector((state: RootState) => state.application.sortBy);
  const isSortFormOpened = useSelector((state: RootState) => state.application.isSortFormOpened);
  const dispatch = useDispatch();
  const sortListIsClosedCSSClass = styles['places-options-closed'];
  const sortListIsOpenedCSSClass = styles['places-options-opened'];

  const handleSortListClick = (evt: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    evt.stopPropagation();

    if(!isSortFormOpened){
      dispatch(setIsSortFormOpened(true));
    }
    else if(isSortFormOpened){
      dispatch(setIsSortFormOpened(false));
    }
  };

  const onListItemClickHandler = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    evt.stopPropagation();
    const newSortByValue: SortByEnum = ((evt.currentTarget as HTMLLIElement).outerText as keyof typeof SortByEnum) as SortByEnum;
    dispatch(setIsSortFormOpened(false));
    dispatch(setSortByValue(newSortByValue));
  };

  const sortTypes = Object.values(SortByEnum);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&emsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {actualSortByValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortFormOpened ? sortListIsOpenedCSSClass : sortListIsClosedCSSClass}`} >
        {sortTypes.map((sortType) => (<SortByListItemComponent key={sortType} textContent={sortType} handleOnclick={onListItemClickHandler}/>))}
      </ul>
    </form>
  );
}
