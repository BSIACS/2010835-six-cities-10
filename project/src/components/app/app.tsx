import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../../pages/login/login.page';
import { MainPage } from '../../pages/main/main.page';
import { NotFoundPage } from '../../pages/not-found/not-found.page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
