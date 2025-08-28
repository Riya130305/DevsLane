import {Routes,Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductArragement from './ProductArragement';
import Navbar from './Navbar';
import Footer from './Footer';
import amazonLogo from './assets/Amazon_(company)-Logo.wine.png';
import NotFoundPage from './NotFoundPage';
import Loading from './Loading';
import { useState } from 'react';
import CartRow from './Cart/CartRow';
import Test from './Test';
import CartPage from './Cart/CartPage';
// import CartPage from './card/CartPage'; // Import CartPage
import { DummyProduct } from './DummyData';
function App() { 
  const xyz="22";
  // // save data to browser storage
  const savedDataString = localStorage.getItem("my-cart")||"{}";
  const savedData=JSON.parse(savedDataString)
  
  const [cartItem,setcartItem]=useState(savedData);
  
  // Function to transfer data from child to parent like ek balti 5 flooor se ground floor per feki ho or fir banti mai saman aane ke bad usko uper keech liya ho
  function handleAddToCard(productId , count){    
    // console.log("App.jsx ProductId",productId ,"count",count);
    console.log("card ",cartItem);
    const oldCount = cartItem[productId] || 0;
    const newCart={...cartItem, [productId]:oldCount + count}
    setcartItem(newCart);
    const cartString=JSON.stringify(newCart);
    localStorage.setItem("my-cart",cartString);
  }

    // Suming up totalCount of all the product ans taking out all keys using Objec.keys method and reduce in helping in suming up the the cart values
    const totalCount = Object.keys(cartItem).reduce(function(previous, current) {
    return previous + cartItem[current];
  }, 0);

  // Convert cartItem object to array for CartPage
  var cartItemsArray = Object.keys(cartItem).map(function(key) {
    return { id: Number(key), quantity: cartItem[key] };
  });

  return(
    <div className="p-5">
    {/* <CartRow  product={DummyProduct[0]} quantity={4}/> */}
      <Navbar ProductCount={totalCount} img={amazonLogo} alt="amazon" />  
       {/* <NotFoundPage/>  */}
    
      <div className='grow'>
      {/* ROUTES INZILIZATION */}
         <Routes>
          <Route path='/' element={<ProductArragement xyz={xyz}/>}></Route> 
          {/* Sending function handleAddToCard which will pass as prom to ProductDetails comeponetnt to get id and count */}
          <Route path='/cart' element={<CartPage cartItem={cartItem} setcartItem={setcartItem}/>} /> Add this line
          <Route path='/product/:id' element={<ProductDetails onAddToCard={handleAddToCard} />}></Route> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>  
      </div>
      <Footer/>
     
    </div>
  )
}
export default App;
