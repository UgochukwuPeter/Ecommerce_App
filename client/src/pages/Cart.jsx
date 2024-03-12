import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import "./cart.css"
import { Add, Remove } from '@mui/icons-material';

const Cart = () => {
  return (
    <div className="cart-container">
        <Navbar/>
        <Announcement/>
        <div className="cart-wrapper">
            <h1 className='cart-title'>Your Bag</h1>
            <div className="cart-top">
                <button className="top-button">continue  shopping</button>
                <div className="top-texts">
                    <span>Shopping Bag(2)</span>
                    <span>Your Wishlist(0)</span>
                </div>
                <button type='filled' className="top-button">Checkout Now</button>
            </div>
            <div className="cart-bottom">
                <div className="cart-info">
                    <div className="cart-product">
                        <div className="cart-product-details">
                            <img src="./images/358-3585688_check-shirts-png-background-stylish-check-shirts-for.png" alt="" />
                            <div className="details">
                                <span><b>Product: </b>Sleeves Shirt</span>
                                <span><b>Product  ID: </b>1234567890</span>
                                <div className='cart-product-color'>
                                <p><b>Color:</b></p>
                                <span></span>
                                    </div>
                                <span><b>Size: </b>37</span>
                            </div>
                        </div>
                        <div className="cart-product-price">
                            <div className="product-amount-container">
                                <Add/>
                                <span>2</span>
                                <Remove/>
                            </div>
                            <h1>$ 30</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="cart-product">
                        <div className="cart-product-details">
                            <img src="./images/Sports-Wear-PNG-Clipart.png" alt="" />
                            <div className="details">
                                <span><b>Product: </b>Sport Wear</span>
                                <span><b>Product  ID: </b>1234567890</span>
                                <div className='cart-product-color'>
                                <p><b>Color:</b></p>
                                <span></span>
                                    </div>
                                <span><b>Size: </b>32</span>
                            </div>
                        </div>
                        <div className="cart-product-price">
                            <div className="product-amount-container">
                                <Add/>
                                <span>3</span>
                                <Remove/>
                            </div>
                            <h1>$ 25</h1>
                        </div>
                    </div>
                </div>
                
                <div className="cart-summary">
                    <h1>Order Summary</h1>
                    <div className="summary-items">
                        <p>Sutotal</p>
                        <span>$ 75</span>
                    </div>
                    <div className="summary-items">
                        <p>Estimated Shipping</p>
                        <span>$ 5.90</span>
                    </div>
                    <div className="summary-items">
                        <p>Shipping Discount</p>
                        <span>$ -5.90</span>
                    </div>
                    <div className="summary-items">
                        <p className='total'>Sutotal</p>
                        <span className='total'>$ 75</span>
                    </div>
                    <button className='check-out-btn'>Check out now</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart