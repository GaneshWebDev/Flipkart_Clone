import './Banner.css'
function Banner(){
    const bannerArr=[
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4f84f7cf33100b5d.png?q=100',
            title:'Top Offers'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/72ec95ea3c99ee60.png?q=100',
            title:'Mobiles & Tablets'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0dac5f7442d7fd5f.png?q=100',
            title:'Electronics'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/436cd6fc952ae1cb.png?q=100',
            title:'TVs & Appliances'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/eb336e40e5a1b6ec.png?q=100',
            title:'Fashion'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f4f8f26cdeb86ce4.png?q=100',
            title:'Beauty'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/92b1f08861995c5f.png?q=100',
            title:'Home & Kitchen'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/d47b98754854d054.png?q=100',
            title:'Furniture'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/7f42ba8e79833eaa.png?q=100',
            title:'Flights'
        },
        {
            img:'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/898880c3805043b1.png?q=100',
            title:'Grocery'
        },
        
    ]
    return(
       <div className="banner">
           {bannerArr.map(items=>{
            return(
            <div className="types">
                <img src={items.img} alt="img"/>
                <span>{items.title}</span>
            </div>)
           })}
       </div>
    )
}
export default Banner;