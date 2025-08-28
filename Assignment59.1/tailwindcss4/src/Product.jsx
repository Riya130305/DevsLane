import React from 'react';
import {Link} from 'react-router-dom';
function Product({thumbnail,title,category,price,rating,id,pqr}){
    return (
        
        <div className="p-3 flex-col grow">
            <img className="w-90 h-90 rounded-md" src={thumbnail} alt={title}/>
            <p className="font-bold">{title}</p>
            <p className="text-gray-500 ">{category}</p>
            <p className=" text-red-500">{price}</p>
            <p className="font-bold">{rating}</p>
            {/* <p className="font-bold text-indigo-400">Parent-to-child {pqr}</p> */}
            <Link className="text-blue-500" to={"/product/" + id}>View Product</Link>
        </div>
        
    )
}
export default Product;