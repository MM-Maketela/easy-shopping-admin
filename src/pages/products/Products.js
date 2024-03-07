import React, { useEffect, useState } from 'react'
import { Buffer } from 'buffer'
import { MiniBar } from '../../components/mini-bar/MiniBar'
import classes from './Products.module.css'
import { Product } from '../../components/product/Product'
export const Products = () => {
  let [data, setData] = useState(null)

  //getting products

 async function handleProducts(){
  try{
     await fetch("http://localhost:3003/client/products")
    .then(res => res.json())
    .then(data => setData(data))
  }catch(e){
    console.log(e)
  }
 }

  // handing products
  useEffect(()=>{
    handleProducts()
  },[])

  function productMap(products){
    let _products = []

    //handle image
    for(let i =0; i<products.length; i++){
        const product = {handleProducts:handleProducts, id:products[i].id, image:products[i]['image1'], name:products[i].productName, price:products[i].price, discount:products[i].discount,  category:products[i].category, details:products[i].details, new:products[i].new, brand:'testing brand', rating:4}
        _products.push(product)
    }
     return _products.map((product,index)=> <div key={index} className={classes.eachProduct}>{<Product info={{product:product}}/>}</div>)
  }
  return (
    <>
    <MiniBar info={{title:"products"}}/>
    {
      data ?  <div id={classes.products}>
      

      <div id={classes.productsInnerContainer}>

        {
          
        productMap(data['data'])
        }

      </div>
    </div>: <div><h1 style={{fontSize:'3rem',color:'red'}}>Loading...</h1></div>
    }
    
    </>
  )
}
