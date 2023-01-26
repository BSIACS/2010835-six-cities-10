import { LogoComponent } from '../logo/logo.component';
import { UserSignInComponent } from '../user-sign-in/user-sign-in.component';

/**Header component
*/
export function HeaderComponent(): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoComponent/>
          </div>
          <UserSignInComponent isLogged={false}/>
        </div>
      </div>
    </header>
  );
}
