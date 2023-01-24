import { Link } from 'react-router-dom';

/**Application 404 page component
*/
export function NotFoundPage(): JSX.Element {

  return (
    <div style={{marginLeft: 80, marginTop: 40}}>
      <h1>
        404.
        <br />
        <small>
        Page not found
        </small>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
