import React,{useEffect} from 'react'
import { MiniBar } from '../../components/mini-bar/MiniBar'
import classes from './Products.module.css'
import { Product } from '../../components/product/Product'
import shoes from '../../assets/images/shoes.jpg'
export const Products = () => {


  const product = {image:shoes, name:'test', price:300, discount:12,  category:'category', details:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et ", new:1, brand:'testing brand', rating:4}
  
  const products = [product,product,product,product,product,product,product,product,product]

  function productMap(){
     return products.map((product,index)=> <div key={index}>{<Product info={{product:product}}/>}</div>)
  }
  return (
    <div id={classes.products}>
      <MiniBar info={{title:"products"}}/>

      <div id={classes.productsInnerContainer}>

        {
        productMap()
        }

      </div>
    </div>
  )
}
