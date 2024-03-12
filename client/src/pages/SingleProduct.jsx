import './singleProduct.css';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer  from '../components/Footer';
import {Add, Remove} from '@mui/icons-material'
const SingleProduct = () => {
  return (
    <div className='singleproduct'>
        <Navbar/>
        <Announcement/>
        <div className="single-wrapper">
            <div className="img-container">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
            </div>
            <div className="info-container">
                <h1>Denim Jumpsuit</h1>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quibusdam odit neque consequuntur vero asperiores non consequatur iusto corrupti reprehenderit.</p>
                <span>$ 20</span>
              <div className="filter-container-product">
                <div className="filter-product">
                  <span className="filter-title">Color</span>
                 <span className='filter-color'></span>
                 <span className='filter-color'></span>
                 <span className='filter-color'></span>
                </div>
                <div className="filter-product">
                <span className="filter-title">Size</span>
                <select name="" id="" className="filter-size">
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                </div>
              </div>
              <div className="add-container">
                <div className="amount-container">
                  <Remove className='amount-icon'/>
                  <span>1</span>
                  <Add className='amount-icon'/>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default SingleProduct