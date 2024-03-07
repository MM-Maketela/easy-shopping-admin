
import classes from  './App.module.css';
import {Routes, Route } from "react-router-dom"
import {Admin} from './pages/home/Admin.js'
import {Header} from  './components/header/Header.js'
import {Footer} from './components/footer/Footer.js'
import {Products} from './pages/products/Products.js'
import {AddProduct} from './pages/add-product/AddProduct.js'
import {SideBar} from './components/side-bar/SideBar.js'
import { Stats } from './pages/stats/Stats';
import { Settings } from './pages/settings/Settings';
import { ToastContainer } from 'react-toastify';
import { Profile } from './pages/profile/Profile';

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
          <Route path="/addProduct/add" element={<AddProduct  process={{process:'ADD PRODUCT'}}/>}/>
          <Route path="/addProduct/edit/:id" element={<AddProduct  process={{process:'EDIT PRODUCT'}}/>}/>
          <Route path='/stats' element={<Stats/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
      </div>
    <Footer/>
    <ToastContainer/>
      
    </div>
  );
}

export default App;
