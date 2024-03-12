import {  FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './popularProduct.css'

const PopularProduct = ({item}) => {
  return (
    <div className='popular-product'>
        <div className='circle'></div>
        <img src={item.image} alt="" />
        <div className="info-products">
            <div className="icon">
                <ShoppingCartOutlined/>
            </div>
            <div className="icon">
                <SearchOutlined/>
            </div>
            <div className="icon">
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default PopularProduct