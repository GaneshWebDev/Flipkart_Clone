import './proCom.css';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../feathers/userSlice';
import { Link } from 'react-router-dom';
function ProCom(){
    const dispatch=useDispatch();
    const logout=()=>{
        dispatch(userLogout());
        window.location.href='/';
      }
    return(
        <div className="proCom">
        <div><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="/><Link to={'/profile'} style={{textDecoration: 'none'}}><span>Profile</span></Link></div>
        <div>Orders</div>
        <div><img src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqIaNjGuq1trzWMcMZH3NkoZ1i1DEJOSSf7P0FtcCH9inG-b3j"/><span onClick={()=>logout()}>Logout</span></div>
        </div>
    )
}
export default ProCom;