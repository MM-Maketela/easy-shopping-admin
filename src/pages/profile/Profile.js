import React,{useState} from 'react'
import { MiniBar } from '../../components/mini-bar/MiniBar'
import classes from './Profile.module.css'

export const Profile = () => {

    let [productName, setProductName] = useState("")
    let [category, setCategory] = useState("")
    let [discount, setDiscount] = useState("")
    let [price, setPrice] = useState("")
    let [inStock, setInStock] = useState("YES")
    let [details, setDetails] = useState("")
    let [productNew, setProductNew] = useState("NO")
  return (
    <div>
        <div>
         <MiniBar info={{title:"profile"}}/>
    </div>
    <div>
        <form id={classes.profile}>
        <div className={classes.formElementsContainer}>
        <ul className={classes.uList} >
        <li  className={classes.listItem}>
          <label>Name: </label>
          <input  type='text'  name='name' placeholder='your first name' value={productName}   onChange={event => setProductName(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          
          <label>Surname: </label>
          <input  type='text' name='surname' placeholder='your last name' value={category} onChange={event => setCategory(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>Email: </label>
          <input  type='text' name='email' placeholder='your email' value={price} onChange={event => setPrice(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>Phone NO: </label>
          <input  type='text' name='number'  placeholder='contact number'  value={discount} onChange={event => setDiscount(event.target.value)}/>
        </li>
        <li className={classes.listItem} id={classes.textareaContainer}>
          <label>Address: </label>
          <textarea name='address' placeholder="province:  town/city: street name:  zipcode:"  value={details} onChange={event => setDetails(event.target.value)}/>
        </li>
      </ul>

    {/* company info */}
      <ul className={classes.uList} >
        <li  className={classes.listItem}>
          <label>Company name: </label>
          <input  type='text'  name='name' placeholder='your first name' value={productName}   onChange={event => setProductName(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          
          <label>Registration number: </label>
          <input  type='text' name='surname' placeholder='company registration number' value={category} onChange={event => setCategory(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>Email: </label>
          <input  type='text' name='email' placeholder='company email' value={price} onChange={event => setPrice(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>Phone NO: </label>
          <input  type='text' name='number'  placeholder='company contact number'  value={discount} onChange={event => setDiscount(event.target.value)}/>
        </li>
        
      </ul>
      </div>
        </form>
    </div>

        
    </div>
  )
}
