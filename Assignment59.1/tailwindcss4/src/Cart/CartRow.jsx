// import React, { useEffect, useState } from 'react';
// import { getProductDetails } from './api';
// import Loading from './Loading';
import { ImCross } from "react-icons/im"
function CartRow({product, quantity,onQuantityChange}) {
 function handleChange(event){
    onQuantityChange(product.id,+event.target.val)
 }

    return (
        <div className="flex flex-row justify-center items-center space-x-6 border border-grey-7">
           <span className="w-10 h-10 flex justify-center items- center"> 
                <ImCross />
            </span>
           
            <div className="p-2 flex flex-row">
                <img src={product.thumbnail} alt={product.title} className="w-16 h-16 object-cover" />
            </div>
            <div className="font-semibold grow">{product.title}</div>
            <h1 className="w-20">{product.price}</h1>
        
            <input
                value={quantity}
                type="number"
                onChange={handleChange}
                className=" border-2 rounded-md w-12 p-1 mr-1"
            />
            <span className="p-1 w-20">${product.price*quantity}</span>
            
        </div>
    );
}

export default CartRow;