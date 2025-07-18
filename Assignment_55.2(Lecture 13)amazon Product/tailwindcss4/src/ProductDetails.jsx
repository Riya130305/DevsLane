import React from 'react';

function ProductDetails(){
    return(
       <div className="p-4 bg-white">
        <div className="flex">
        <div className="w-full h-full md:w-1/2 flex juxtify-center items-center">
        <img className="w-full object-cover" src="https://codeyogi.io/coffee-mug.jpeg" alt="mug"/>
        </div>
        <div className="w-1/2 pl-6 ">
        <h1 className="text:2xl md:text-4xl text-gray-500 ">Black Printed Coffee Mug</h1>
        <p className="font-bold text-xs text-black py-4 md:text-2xl">$15.00</p>
        <p className="text-gray-500 text-xs md:text-xl">This is a black printed coffee mug made of high-quality ceramic.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="flex gap-2 mt-4 md:mt-5">
        <button className="border border-gray-400 text-xs p-0.2 md:py-3 px-5">1</button>
        <button className="text-white bg-red-500 text-xs p-0.2 md:py-3 px-3 border rounded-md">ADD TO CART</button>
        </div>
        </div>
    </div>
    </div>
    )
};

export default ProductDetails;