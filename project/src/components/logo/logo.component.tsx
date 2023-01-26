import { Link } from 'react-router-dom';

/**Application login page component
*/
export function LogoComponent(): JSX.Element {

  return (
    <Link to='/' title=''>
      <div className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
      </div>
    </Link>
  );
}
