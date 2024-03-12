import './categoryItem.css';

const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
        <img src={item.image} alt="" />
        <div className="info">
          <h1 className="title">{item.name}</h1>
          <button>Shop Now</button>
        </div>
      </div>
  )
}

export default CategoryItem;