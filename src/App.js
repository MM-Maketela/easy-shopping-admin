
import classes from  './App.module.css';
import {Routes, Route } from "react-router-dom"
import {Admin} from './pages/home/Admin.js'
import {Header} from  './components/header/Header.js'
import {Footer} from './components/footer/Footer.js'
import {Products} from './pages/products/Products.js'
import {AddProduct} from './pages/add-product/AddProduct.js'
import {SideBar} from './components/side-bar/SideBar.js'

function App() {
  return (
    <div  className={classes.App}>
      <Header/>
      <div id={classes.flex}>
        <SideBar />
        <div id={classes.routes}>
        <Routes>
          <Route path="/" element={<Admin />}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/addProduct" element={<AddProduct />}/>
        </Routes>
        </div>
      </div>
    <Footer/>
      
    </div>
  );
}

export default App;
