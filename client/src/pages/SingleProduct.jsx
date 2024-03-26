import './singleProduct.css';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer  from '../components/Footer';
import {Add, Remove} from '@mui/icons-material'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {publicRequest} from '../requestMethods';
import styled from 'styled-components'

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    border:1px solid grey;
    margin:0 5px;
    cursor:pointer;
`
const SingleProduct = () => {
  const location = useLocation()
  const id  =  location.pathname.split("/")[2];
  const[product,setProduct] = useState({});
  const[quantity,setQuantity] = useState(1);
  const[Color, setColor] = useState("");
  const[Size, setSize] = useState("");

  useEffect(()=>{
      const getProduct = async()=>{
          try{
              const response = await publicRequest.get("/products/find/"+id);
              setProduct(response.data);
          }catch(err){
            console.log(err)
          }
      }
      getProduct();
  },[id]);

  const handleQuantity =(type)=>{
      if(type === 'desc'){
        quantity >  1 && setQuantity(quantity - 1);
      }else{
        setQuantity(quantity + 1)
      }
  }

  const handleClick  =()=>{
    //update  cart
    
  }
  return (
    <div className='singleproduct'>
        <Navbar/>
        <Announcement/>
        <div className="single-wrapper">
            <div className="img-container">
                <img src={product.img} alt="" />
            </div>
            <div className="info-container">
                <h1>{product.title}</h1>
                <p className="product-desc">{product.desc}</p>
                <span>$ {product.price}</span>
              <div className="filter-container-product">
                <div className="filter-product">
                  <span className="filter-title">Color</span>
                  {product && product.color && product.color.map((c) => (
                      <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                    ))}
                </div>
                <div className="filter-product">
                <span className="filter-title">Size</span>
                <select name="" id="" className="filter-size" onChange={(e)=>setSize(e.target.value)}>
                  {product && product.size && product.size.map((s) => (
                    <option value="" key={s}>{s}</option>
                  ))}
              </select>
                </div>
              </div>
              <div className="add-container">
                <div className="amount-container">
                  <Remove className='amount-icon' onClick={()=>handleQuantity("desc")}/>
                  <span>{quantity}</span>
                  <Add className='amount-icon' onClick={()=>handleQuantity("inc")}/>
                </div>
                <button onClick={handleClick}>Add To Cart</button>
              </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default SingleProduct