import { Link } from 'react-router-dom';


type UserSignInProps = {
  isLogged: boolean;
}

export function UserSignInComponent({ isLogged }: UserSignInProps): JSX.Element {

  if (!isLogged) {
    return (
      <Link to='/login' title='Sign in'>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <div className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </div>
            </li>
          </ul>
        </nav>
      </Link>
    );
  }
  else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
