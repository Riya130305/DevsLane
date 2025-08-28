import React,{ useState,useEffect} from 'react';
import CartRow from './CartRow';

function CartList({product,cart}) {
    const[localCart,setLocalCart]=useState(cart);

    useEffect(
        function(){
            setLocalCart(cart);
        },
        [cart]
    );

    function handleQuantityChange(productId,newValue){
        const newLocalCart={...localCart,[productId]:newValue};
        setLocalCart(newLocalCart);
    }
    return (
   <div>
    <div className="flex px-4 py-2 ">
        <span className="ml-30 grow">Product</span>
        <span className="w-16">Price</span>
        <span className="w-20">Quantity</span>
        <span className="w-16">Total</span>

    </div>
      {product.map(function(p){
        return <CartRow product={p} quantity={localCart[p.id]} onQuantityChange={handleQuantityChange}/>;
      })};
           
    </div>
    );
}

export default CartList;