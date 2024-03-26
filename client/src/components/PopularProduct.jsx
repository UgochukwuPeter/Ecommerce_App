import {  FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './popularProduct.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'


const PopularProduct = ({item}) => {
  return (
    <div className='popular-product'>
        <div className='circle'></div>
        <img src={item.img} alt="" />
        <div className="info-products">
            <div className="icon">
                <ShoppingCartOutlined/>
            </div>
            <div className="icon">
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </div>
            <div className="icon">
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default PopularProduct