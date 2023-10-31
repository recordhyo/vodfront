import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../../logo.png"
import "./Header.css"

const Header = () => {
    const navigate = new useNavigate();
    const correntuser = window.localStorage.getItem("id")
    const userid = window.localStorage.getItem("userid")
    const tmp = 0;

    // const goToLoginForm = () => {
    //     navigate('/userlogin')
    // }
    // const goToSignupForm = () => {
    //     navigate('/usersignup')
    // }
    // const goToMypage = () => {
    //     navigate('/mypage')
    // }
    // const goToLogout = () => {
    //     window.localStorage.clear()
    //     ApiService.logout()
    //         .then( (res) => {
    //             console.log(res)
    //         }
    //     )
    //     alert("로그아웃 완료")
    //     navigate('/')
    // }
    // const goToArticle = () => {
    //     navigate('articles')
    // }

    const backToHome = () => {
        navigate('/')
    }

    
    return (
        <header>
            <div id="a">
            <div id="b">
            <a id="logo" href="/">
                <img alt="kakao" src={logo} width="50px"/></a>
        <ul>
          <li><a href="/">홈</a></li>
          <li><a href="/">영화</a></li>
          <li><a href="/">TV</a></li>
        </ul>

        <form class="Search">
            <input type="text" />
        </form>

        <div class="button2">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

    )
    
}

export default Header