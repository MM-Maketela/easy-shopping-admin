import React, { useState } from 'react'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import classes from './Product.module.css'
import image from '../../assets/images/shoes.jpg'
import { Link } from 'react-router-dom';
export const Product = (props) => {
  const {product} = props.info
  let [response, setResponse] = useState({})

  let _src = "data:image/*;base64,"+product['image']
  // handle edit 
  async function handleDelete(){
      await fetch(`http://localhost:3003/client/products/${product.id}`,{
        method:'DELETE',
        body:product.id
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(!(data['success']===1 && data['data'].affectedRows!==0)){
        toast.warn(`product not removed to database.`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        return
        }
        toast.success(`product removed to database.`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        product.handleProducts()
    })
  }
  return (
    <div id={classes.Product}>
    <div className={classes.productInnerContainer}>
      <div id={classes.discount}>
        {product.discount}% <small>OFF</small>
      </div>
      <div id={classes.new}>
        {product.new ===1 ? <div>new</div>:<div></div> }
      </div>
      <div className={classes.info}>

      <img src={_src} id={classes.image}/>
      <div id={classes.innerContainerInfo}>
        <div>
          {product.name}
        </div>
        <div>
          {product.category}
        </div>

        <div id={classes.price_rating}>
          <div>
            R{product.price}
          </div>
          <div>
            {product.rating}
          </div>
        </div>

      </div>
      </div>

    </div>
    <div className={classes.buttonClass}>
      <Link to={`/addProduct/edit/${product.id}`}  hidden   name='edit-link'/>
      <button  type='button' className={classes.button} id={classes.edit}  onClick={()=>{ document.getElementsByName('edit-link')[0].click()}}>edit</button>
      <button type='button' className={classes.button} id={classes.delete} onClick={()=>{handleDelete()}}>delete</button>
    </div>
    </div>
  )
}
