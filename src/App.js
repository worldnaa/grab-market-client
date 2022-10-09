import './App.css';
import MainPageComponent from './main';
import {Switch, Route} from 'react-router-dom'; //경로 별로 다른 화면을 보여주는 라이브러리
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
