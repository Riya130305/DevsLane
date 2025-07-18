import React from 'react';

function Product({img,title,category,price,rating}){
    return(
        <div className="pl-3">
            <img src={img} alt={title} className="w-full h-70 object-cover"/>
            <p className="text-gray-700 text-md">{title}</p>
            <p className="text-md font-bold md:text-2xl">{category}</p>
            <p className="text-red-600 text-sm md:text-xl">{rating}</p>
            <p className="font-bold text-shadow-2xs md:text-xl">{price}</p>
        </div>
    )
};
    export default Product;