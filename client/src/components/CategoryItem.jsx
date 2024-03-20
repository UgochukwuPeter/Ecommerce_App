import { Link } from 'react-router-dom/cjs/react-router-dom';
import './categoryItem.css';

const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
    <Link to={`/products/${item.cat}`}>
        <img  className='category-img' src={item.image} alt="" />
        <div className="info">
          <h1 className="title">{item.name}</h1>
          <button>Shop Now</button>
        </div>
      </Link>
      </div>
  )
}

export default CategoryItem;