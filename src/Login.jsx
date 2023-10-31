import kakao_btn from "./kakao_btn.png"
function Login()
{
    const Rest_api_key=process.env.REACT_APP_KAKAO_KEY
    const redirect_uri = process.env.REACT_APP_KAKAO_URI //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    return(
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',

        }}>

        <a href={kakaoURL}>
        <img alt="kakao" className="text-center mb-2" src={kakao_btn} width="200px"/></a>
        </div>
    )
}
export default Login