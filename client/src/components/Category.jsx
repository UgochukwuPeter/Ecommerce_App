import './categories.css'
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <div className='categories-container'>
    {
     categories.map((item)=>(
       <CategoryItem item={item} key={item.id}/>
       ))}
 </div>
  )
}

export default Category