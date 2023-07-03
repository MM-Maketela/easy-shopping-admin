import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MiniBar.module.css'

export const MiniBar = (props) => {

    const {title} = props.info
  return (
    <div id={classes.miniBar}>
        <div id={classes.miniNav}>some info</div>
        <div  id={classes.button}>
            {title === "products" ? <Link  to={'/addProduct'} >ADD PRODUCT</Link>:<div></div>}
        </div>
    </div>
  )
}
