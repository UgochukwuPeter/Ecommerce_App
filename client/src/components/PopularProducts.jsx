import './popularProducts.css'
import { regularProducts } from '../data'
import PopularProduct from './PopularProduct'

const PopularProducts = () => {
  return (
    <div className='popular-products'>
        {
            regularProducts.map((item)=>(
                <PopularProduct item={item} key={item.id}/>
            ))
        }
        </div>
  )
}

export default PopularProducts