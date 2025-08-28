import React from 'react';
import Product from './Product';
// import allData from './DummyData';

function ProductList({product,pqr}){
    return(
        <>
        <div className="p-2 flex flex-wrap border border-white h-auto shadow-2xl rounded-md grid gap-3 md:grid-cols-2 lg:grid-cols-3">
           {/* Printing product in jsx array(HTML array) formate */}
           {product.map(function(item){
                return (
                    <Product
                        key={item.id}
                        {...item} pqr={pqr}
                        // sku{item.sku}
                        // img={item.img}
                        // title={item.title}
                        // category={item.category}
                        // price={item.price}
                        // rating={item.rating}
                       
                    />
                );
           })}
           
        </div>
         
        
    </>
    )
}

export default ProductList;