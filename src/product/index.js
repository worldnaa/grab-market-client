import {useParams} from "react-router-dom"; //경로 별로 다른 화면을 보여주는 라이브러리
import axios from 'axios';                  //네트워크 통신을 위한 라이브러리
import { useEffect, useState } from 'react';
import "./index.css"; //현재위치인 product폴더에서(==> ./) index.css 파일 불러오기

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null); //axios에서 받은 상품정보를 useState에 업데이트 시킨다
  
  useEffect(function(){ //렌더링할 때마다 axios가 무한 실행되지 않도록 useEffect로 감싸준다
    axios
    .get(`https://d59252e4-732d-4c26-bbb8-adac3f328deb.mock.pstmn.io/products/${id}`)
    .then(function(result){
      setProduct(result.data); //포스트맨에서 가져온 상품 정보를 product에 담아준다
    })
    .catch(function(error){
      console.error(error);
    });
  }, []) //[]의 값을 비워두면 처음 렌더링에만 딱 한 번 네트워크 요청이 호출된다
 
  //1. useState(null)로 인해 처음엔 product에 null이 들어있는 상태다
  //2. axios는 비동기 통신이므로 네트워크 요청이 처리되기 전에 아래 html코드가 렌더링 된다
  //3. 이미지를 불러오는 product.imageUrl부분에서 product가 null이므로 오류가 발생한다
  //4. 그러므로 아래와 같이 방어 코드를 작성한다. 아래 if 코드 실행 후 axios를 통한 네트워크 통신이 완료되면
  //5. 포스트맨 mock 서버에 작성한 product 객체 정보가 product 변수에 담긴다
  //6. 그 이후에 다시 아래쪽 코드가 실행되고 html 코드가 정상적으로 렌더링 된다
  if(product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>
  }

  return (
    <div>
      <div id='image-box'>
        <img src={"/" + product.imageUrl} />
      </div>

      <div id='profile-box'>
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>

      <div id='contents-box'>
        <div id='name'>{product.name}</div>
        <div id='price'>{product.price}원</div>
        <div id='createdAt'>2022년 10월 10일</div>
        <div id='description'>{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;