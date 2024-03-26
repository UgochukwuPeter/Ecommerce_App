import './popularProducts.css'
import { products, regularProducts } from '../data'
import PopularProduct from './PopularProduct'
import { useEffect, useState } from 'react'
import axios from 'axios';

const PopularProducts = ({cat,filters,sort}) => {
  const [myProducts, setMyProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const fetchProduct = async ()=>{
      try{
        const response = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products" );
        // console.log(response.data);
        setMyProducts(response.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchProduct();
  },[cat]);

  useEffect(()=>{
    cat  && setFilteredProducts(
      myProducts.filter(item => Object.entries(filters).every(([key,value])=>
      item[key].includes(value)
      ))
    );
  },[myProducts,cat,filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
    }else if(sort === "asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
      );
    }else{
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  },[sort])
  return (
    <div className='popular-products'>
        {
           cat ? filteredProducts.map((item)=>(
                <PopularProduct item={item} key={item._id}/>
            )) : myProducts.map((item)=>(
              <PopularProduct item={item} key={item._id}/>
          ))
        }
        </div>
  )
}

export default PopularProducts