import { HeaderSimpleComponent } from '../../components/header-simple/header-simple.component';
import { LoginFormComponent } from './components/login-form.component';


/**Application login page component
*/
export function LoginPage(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <HeaderSimpleComponent/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <LoginFormComponent/>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
