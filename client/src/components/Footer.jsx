import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <h1>CODEIT.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, natus quos dolor placeat libero, eos id hic velit molestias eveniet sapiente necessitatibus quis magnam. Perferendis repudiandae ipsum eveniet beatae ad!</p>
            <div className="social-container">
                <div className="social-icon">
                    <Facebook/>
                </div>
                <div className="social-icon">
                    <Instagram/>
                </div>
                <div className="social-icon">
                    <Twitter/>
                </div>
                <div className="social-icon">
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className="center">
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Men Fashion</li>
                <li>Women Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="right">
            <h3>Contact</h3>
            <div className="contact">
                <Room/>
                <p>Plot 2B Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contact">
                <Phone/>
                <p>+234 8168 22 9789</p>
            </div>
            <div className="contact">
                <Email/>
                <p>pjgraphixs@gmail.com</p>
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer