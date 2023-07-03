import React from 'react'
import classes from './MiniCard.module.css'

export const MiniCard = (props) => {

    const {info,} = props.info
  return (
    <div id={classes.MiniCard}>
        <div>
        {info}
        </div>
    </div>
  )
}
