import './product.css';

const Product = ({ name, image, description, backgroundColor }) => {
  return (
    <div className='product-container' style={{ backgroundColor }}>
      <div className="product-image">
      <img src={image} alt={name} />
      </div>
    <div className='product-description'>
    <h1>{name}</h1>
    <p>{description}</p>
    </div>
    </div>
  )
}

export default Product