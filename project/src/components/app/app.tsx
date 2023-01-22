import { MainPage } from '../../pages/main/main-page';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount} : AppProps): JSX.Element {
  return <MainPage errorsCount={errorsCount}/>;
}

export default App;
