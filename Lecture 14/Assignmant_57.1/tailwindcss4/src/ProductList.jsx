import React from 'react';
import Product from './Product';

function ProductList({product}){
    return(
        <>
        <div className="p-2 flex flex-wrap border border-white h-auto shadow-2xl rounded-md grid gap-3 md:grid-cols-2 lg:grid-cols-3">
           {/* Printing product in jsx array(HTML array) formate */}
           {product.map(function(item){
                return (
                    <Product
                        img={item.img}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        rating={item.rating}
                    />
                );
           })}
            <div className="flex gap-3">
                <button className="border border-red-400 p-3 text-white bg-red-700 ">1</button>
                <button className="border border-red-400 p-3 text-red-700 ">2</button>
                <button className="border border-red-400 p-3 text-red-700 ">-></button>
            </div>
        </div>
        
        
    </>
    )
}

export default ProductList;