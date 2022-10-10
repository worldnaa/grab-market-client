import 'antd/dist/antd.css'; //디지인을 도와주는 antd 라이브러리
import './App.css';
import MainPageComponent from './main';
import {Switch, Route, Link, useHistory} from 'react-router-dom'; //경로 별로 다른 화면을 보여주는 라이브러리
import UploadPage from './upload';
import ProductPage from './product';
import {Button} from "antd";                       //antd에 있는 버튼 가져오기
import {DownloadOutlined} from '@ant-design/icons';//antd에 있는 아이콘 가져오기

function App() {
  const history = useHistory(); //useHistory 결과물을 받아 history에 저장

  return (
    <div> 
      <div id="header">
        <div id="header-area">
          <Link to="/"> 
            <img src="/images/icons/logo.png" />
          </Link>
          <Button 
            size='large'
            onClick={function(){ history.push('/upload'); }}
            icon={<DownloadOutlined />}
          >상품 업로드</Button>
        </div>
      </div>

      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
