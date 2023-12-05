import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Redirection(){
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    console.log(code)

    useEffect(() => {
        navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return <div>로그인 중입니다.</div>;
  };
  
  export default Redirection;