import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './courosel.css'
function Courosel(){
    return(
        <div className="couroselDiv">
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} className="car">
        <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/18dc1591a016958b.jpg?q=20" />
        </div>
        <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/98b44a3628440823.jpg?q=20" />
        </div>
        <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b49d3cc74379cc9a.jpeg?q=20" />
        </div>
        <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ded2a768b23a1a3.jpg?q=20" />
        </div>
    </Carousel>
      <div className="nextDiv">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/c0b62e6c3d7b6203.jpg?q=20"/>
      </div>
      <div className="nextDiv1">
        <div className="offerImg">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/da5fb3e4cfe57be5.jpg?q=20"/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/959bc5aa4c390ae8.jpg?q=20"/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/cac9a62ac0c2c88f.jpg?q=20"/>
        </div>
      </div>
    </div>
    )
}
export default Courosel;