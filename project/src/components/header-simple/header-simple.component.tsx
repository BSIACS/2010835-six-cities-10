import { LogoComponent } from '../logo/logo.component';

/**Simple header component*/
export function HeaderSimpleComponent(): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoComponent/>
          </div>
        </div>
      </div>
    </header>
  );
}
