import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Redirection(){
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    console.log(code)

    useEffect(() => {
    //    axios.post('https://127.0.0.1:8000/',
    //    {'grant_type': "authorization_code", 'client_id': process.env.REACT_APP_KAKAO_KEY,
    //    'redirect_uri': process.env.REACT_APP_KAKAO_URI,
    //    'code': code}, {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    //     }}))
    //     console.log(r.data);
  
    //     // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
    //     localStorage.setItem('name', r.data.user_name); // 일단 이름만 저장했다.
        
        navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return <div>로그인 중입니다.</div>;
  };
  
  export default Redirection;