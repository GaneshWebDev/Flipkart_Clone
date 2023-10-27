import './home.css';
import LoginNew from '../loginScreen/login2';
import Banner from '../../components/Banner/Banner';
import Courosel from '../../components/courosel/courosel';
function Home(login){
    console.log('home',login)
    return(
        <div className='home'>
         {login.login&&<LoginNew loginFun={login.loginFun}/>}
         {!login.login&&<Banner/>}
         {!login.login&&<Courosel/>}
        </div>
    )
}
export default Home;