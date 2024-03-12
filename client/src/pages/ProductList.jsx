import './productlist.css';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer  from '../components/Footer';
import PopularProducts from '../components/PopularProducts';
import NewsLetter from '../components/NewsLetter';

const ProductList = () => {
  return (
    <div className='productlist'>
        <Navbar/>
        <Announcement/>
        <h1>Dresses</h1>
        <div className="filter-container">
        <div className='filter'>
            <span>Filter Products</span>
            <select>
                <option disabled selected>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
            </select>
            <select>
                <option disabled selected>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
        </div>
        <div className='filter'>
            <span>Sort  Products</span>
            <select>
                <option selected>Newest</option>
                <option>Price (asc)</option>
                <option>Price (desc)</option>
            </select>
        </div>
        </div>
        <PopularProducts/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default ProductList