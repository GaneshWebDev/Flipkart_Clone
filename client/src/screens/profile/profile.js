import './profile.css';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../feathers/userSlice';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '10px 0',
  border:'2px solid'
};
const trStyle = {
  margin:'10px',
  border:'2px solid'
};

function Profile() {
  const dispatch = useDispatch();
  const storedData = localStorage.getItem('persist:root');
  const user = JSON.parse(storedData);
  const orders = JSON.parse(user.orders);
 console.log(orders)
  const logout = () => {
    dispatch(userLogout());
    window.location.href = '/';
  };

  return (
    <div className="profile">
      <div className="profile_avatar">
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" />
        <span>Hello</span>
      </div>
      <div className='orders'>
        <div>
          <h2>Order History</h2>
          {orders.length>0 ? ( // Check if orders is defined
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>Product Title</th>
                  <th>Brand</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={index} style={trStyle}>
                    <td>{item.Product_Title}</td>
                    <td>{item.Brand}</td>
                    <td>{item.Price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No order history available.</p>
          )}
        </div>
      </div>
      <div className='logout'>
        <img src='https://t3.gstatic.com/images?q=tbn:ANd9GcSqIaNjGuq1trzWMcMZH3NkoZ1i1DEJOSSf7P0FtcCH9inG-b3j' />
        <span onClick={() => logout()}>Logout</span>
      </div>
    </div>
  );
}

export default Profile;
