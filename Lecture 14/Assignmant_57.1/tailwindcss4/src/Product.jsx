import React from 'react';

function Product({img,title,category,price,rating}){
    return (
        <div className="p-3">
            <img className="w-full h- object-cover rounded-md" src={img} alt={title}/>
            <p className="font-bold">{title}</p>
            <p className="text-gray-500 ">{category}</p>
            <p className=" text-red-500">{price}</p>
            <p className="font-bold">{rating}</p>
        </div>
    )
}
export default Product;