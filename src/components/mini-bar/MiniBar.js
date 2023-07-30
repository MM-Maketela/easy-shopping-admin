import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MiniBar.module.css'

export const MiniBar = (props) => {

    const {title} = props.info
   
  return (
     <div id={classes.miniBar}>
                          <div id={classes.miniNav}>some info</div>
                          {title==='products' ? <Link id={classes.button} to={'/addProduct/add'}>
                              ADD PRODUCT
                          </Link>:<div></div>}
                      </div>
  )
}
