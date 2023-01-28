import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { offersMockData } from '../../mock-data/offers/offers';
import { FavoritesPage } from '../../pages/favorites/favorites.page';
import { LoginPage } from '../../pages/login/login.page';
import { MainPage } from '../../pages/main/main.page';
import { NotFoundPage } from '../../pages/not-found/not-found.page';
import { PropertyPage } from '../../pages/property/property.page';
import { AuthorizationStatus } from '../../types/authorization-status.enum';
import { Offer } from '../../types/offer';
import { PrivateRouteComponent } from '../private-route/private-route.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const offers: Offer[] = offersMockData;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage offers={offers}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/favorite' element={<PrivateRouteComponent authStatus={AuthorizationStatus.AUTH}><FavoritesPage/></PrivateRouteComponent>}/>
        <Route path='/property' element={<PropertyPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
