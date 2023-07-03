import React from 'react'
import classes from './Product.module.css'
import image from '../../assets/images/shoes.jpg'
export const Product = (props) => {
  const {product} = props.info
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

      <img src={image} id={classes.image}/>
      <div id={classes.innerContainerInfo}>
        <div>
          {product.name}
        </div>
        <div>
          {product.category}
        </div>

        <div id={classes.price_rating}>
          <div>
            {product.price}
          </div>
          <div>
            {product.rating}
          </div>
        </div>

      </div>
      </div>

    </div>
    <div className={classes.buttonClass}>
      <button  type='button' className={classes.button} id={classes.edit}>edit</button>
      <button type='button' className={classes.button} id={classes.delete}>delete</button>
    </div>
    </div>
  )
}
