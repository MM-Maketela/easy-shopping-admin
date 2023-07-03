import React from 'react'
import classes from './Logo.module.css'
import LogoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

 export const  Logo = () => {
  return (
    <div className={classes.logo}>
	    <Link  to="/" className="logo" >
				
		    <img src={LogoImg} alt=""/>
		</Link>
	</div>
  );
}
