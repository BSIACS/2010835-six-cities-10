type SortByListItemProps = {
  textContent: string;
  handleOnclick: (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

/**Places sorting form component*/
export function SortByListItemComponent({textContent, handleOnclick}: SortByListItemProps): JSX.Element {

  return (
    <li className="places__option" tabIndex={0} onClick={handleOnclick}>{textContent}</li>
  );
}
