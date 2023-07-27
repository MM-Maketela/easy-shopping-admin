import React,{useEffect, useState} from 'react'
import classes from './AddProduct.module.css'
import {RiImageAddLine} from 'react-icons/ri/index.esm'
import { v4 as uuidv4} from 'uuid'


export const AddProduct = () => {

  let [productName, setProductName] = useState("")
  let [category, setCategory] = useState("")
  let [discount, setDiscount] = useState(0)
  let [price, setPrice] = useState(0)
  let [inStock, setInStock] = useState("YES")
  let [details, setDetails] = useState("")
  let [productNew, setProductNew] = useState("NO")
  let [image0, setImage0] = useState(null)
  let [image1, setImage1] = useState(null)
  let [image2, setImage2] = useState(null)
  let [image3, setImage3] = useState(null)
  
  const SIZE = 80
  function addProduct(event){
    event.preventDefault()
    const myForm = document.getElementsByName('my-form')[0]
    const formData = new FormData(myForm)
    const id = uuidv4()
    formData.append("id",id)

    

    fetch("http://localhost:3003/client/products/", {
      method: 'POST',
      body:formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
  }
  return(
    <div className={classes.formContainer}  onSubmit={event => addProduct(event)}>

      <div className={classes.formHeaderContainer}>
      <div className={classes.formHeader}>ADD PRODUCT</div>
      </div>
      <form id={classes.form}  name='my-form'>
        <div className={classes.formInnerContainer}>
        <div className={classes.part1}>
        <ul className={classes.uList} >
        <li  className={classes.listItem}>
          <label>Name: </label>
          <input  type='text'  name='productName' placeholder='product name' value={productName}   onChange={event => setProductName(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          
          <label>Category: </label>
          <input  type='text' name='category' placeholder='product category' value={category} onChange={event => setCategory(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>Price: </label>
          <input  type='text' name='price' placeholder='300' value={price} onChange={event => setPrice(event.target.value)}/>
        </li>
        <li className={classes.listItem}>
          <label>discount: </label>
          <input  type='text' name='discount'  placeholder='12'  value={discount} onChange={event => setDiscount(event.target.value)}/>
        </li>
      </ul>
        </div>


        <div className={classes.part2}>
        <ul className={classes.uList} >
        <li  className={classes.select}>
          <label>In stock: </label>
          <select name={'inStock'} value={inStock} onChange={event => setInStock(event.target.value)}>
            <option>YES</option>
            <option>NO</option>
          </select>
        </li>
        <li className={classes.select}>
          <label>New: </label>
          <select name='new'  value={productNew} onChange={event => setProductNew(event.target.value)}>
            <option>YES</option>
            <option>NO</option>
          </select>
        </li>
        <li className={classes.listItem} id={classes.textareaContainer}>
          <label>about product: </label>
          <textarea name='details' placeholder='all about product...'  value={details} onChange={event => setDetails(event.target.value)}/>
        </li>
        
      </ul>
        </div>
        </div>
        <div >
          <ul className={classes.images}>
          <li> 
          <input  type='file'  accept='image/*' name ='image0' hidden required  onChange={(event)=>{
            setImage0(event.target.files[0])
          }}/>
          
          {image0 === null ? <div className={classes.iconContainer} onClick={()=>{
              document.getElementsByName('image0')[0].click()
          }}><RiImageAddLine    className={classes.icons}/></div>:<div className={classes.imageContainer}><img src={ URL.createObjectURL(image0)}  className={classes.img}/> <button type='button' className={classes.removeBtn} onClick={()=>{
            setImage0(null)
          }}>remove</button></div>}
        </li>
        <li>
          <input  type='file' accept='image/*' name='image1' hidden  required onChange={(event)=>{
            setImage1(event.target.files[0])
          }}/>
          {image1 === null ? <div className={classes.iconContainer} onClick={()=>{
              document.getElementsByName('image1')[0].click()
          }}><RiImageAddLine    className={classes.icons}/></div>:<div className={classes.imageContainer}><img src={ URL.createObjectURL(image1)}  className={classes.img}/> <button type='button' className={classes.removeBtn} onClick={()=>{
            setImage1(null)
          }}>remove</button></div>}
        </li>
        <li>
          <input  type='file' accept='image/*' name='image2' hidden  required onChange={(event)=>{
            setImage2(event.target.files[0])
          }}/>
          {image2 === null ? <div className={classes.iconContainer} onClick={()=>{
              document.getElementsByName('image2')[0].click()
          }}><RiImageAddLine    className={classes.icons}/></div>:<div className={classes.imageContainer}><img src={ URL.createObjectURL(image2)}  className={classes.img}/> <button type='button' className={classes.removeBtn} onClick={()=>{
            setImage2(null)
          }}>remove</button></div>}
        </li>
        <li >
          <input  type='file' accept='image/*' name='image3' hidden   required onChange={(event)=>{
            setImage3(event.target.files[0])
          }}/>
          {image3 === null ? <div className={classes.iconContainer} onClick={()=>{
              document.getElementsByName('image3')[0].click()
          }}><RiImageAddLine    className={classes.icons}/></div>:<div className={classes.imageContainer}><img src={ URL.createObjectURL(image3)}  className={classes.img}/> <button type='button' className={classes.removeBtn} onClick={()=>{
            setImage3(null)
          }}>remove</button></div>}
        </li>
          </ul>
        </div>
        <button type='submit' id={classes.submitBtn}>SUBMIT</button>
      </form>
      </div>
  )
}
