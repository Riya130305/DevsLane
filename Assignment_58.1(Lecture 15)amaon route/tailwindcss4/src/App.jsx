import React, { useState } from 'react';
import ProductList from './ProductList'
import Navbar from './Navbar';
import amazonLogo from './assets/Amazon_(company)-Logo.wine.png';
import Footer from './Footer';
function App() {
 const [query,setQuery]=useState("");
 const [data,setData]=useState("allData");
 const [sort,setSort]=useState("Default");
  // Object creating

  const allData=[
    {
        img:"https://tse3.mm.bing.net/th/id/OIP.qm6OjZHWGyABUJwLmcInqAHaG8?pid=Api&P=0&h=180" ,
        title:"Mugs" ,
        category:"Black Printer Coffee Mug", 
        price:"$"+19.99,
        rating:4.5 ,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.KtxQ5FLj3svaK6VMhlGENwHaE8?pid=Api&P=0&h=180" ,
        title:"Mugs" ,
        category:"Father's Day Coffee Mug",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.KtxQ5FLj3svaK6VMhlGENwHaE8?pid=Api&P=0&h=180" ,
        title:"Mugs" ,
        category:"Father's Day Coffee Mug",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://uxlthemes.com/demo/cordero/wp-content/uploads/sites/24/2020/06/mens-tee-blue.jpg" ,
        title:"T-shirt" ,
        category:"Blue mens t-shirt",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.KtxQ5FLj3svaK6VMhlGENwHaE8?pid=Api&P=0&h=180" ,
        title:"Mugs" ,
        category:"Coffee Mug",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://tse1.mm.bing.net/th/id/OIP.dRN9r2Wn8TUrv6J_a_-3eQHaHa?pid=Api&P=0&h=180" ,
        title:"T-shirt" ,
        category:"Black T-shirt",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://romans-cdn.rlab.net/images/original/504ca622-5d91-4404-88e1-f2c80b060d77.jpg" ,
        title:"Top" ,
        category:"Top",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://i5.walmartimages.com/seo/DARING-DIVA-Party-Glitter-Shiny-Striped-Metallic-Top-M-Blue_fbc504bb-146a-4c8f-9f97-f2b50b164a12.58955fef60cb42c60d5864861d6c2c20.jpeg" ,
        title:"Fancy Top" ,
        category:"Fancy Top",
        price:"$"+19.99,
        rating:4.5,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.KtxQ5FLj3svaK6VMhlGENwHaE8?pid=Api&P=0&h=180" ,
        title:"Mugs" ,
        category:"Father's Day Coffee Mug",
        price:"$"+19.99,
        rating:4.5,
    },
  ];
  //let data=allData;
  //USESTATE FOR SEEING UPDATIONS
  

  function handleChange(event){
   const newQuery=event.target.value;
   const newData=allData.filter(function(item){
    return item.title.toLowerCase().indexOf(newQuery.toLowerCase())!=-1;
   })
   console.log("new data is",data);
   setQuery(newQuery);//TO MAKE UPDATION WHEN WE USE INPUT (USESTATE)
   setData(newData);//TO MAKE UPDATION WE USE USESTATE(TO UPDATE CARD)

  }

  function handleSortChange(event){
    setSort(event.target.value);
  }
  return (
    <>
     <div className="min-h-screen  bg-gray-700">
      <div className="bg-white">
      <Navbar img={amazonLogo} alt="amazon" />
      
    <div className="p-10">
      <div className=" flex justify-end items-end mt-5">
        <select 
        value={sort}
        onChange={handleSortChange}
        className="border p-2 rounded">

          <option value="default">Default sorting</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
        </select>
      </div>

     <div>
      <input 
      value={query} //taking current query from the usecase
      className="border border-gray-600 p-2 rounded-lg" 
      placeholder='Search'
      onChange={handleChange}/>
     </div>
      <ProductList product={data}></ProductList>
   
     </div>
    </div>
      <Footer />
    </div>

    </>
  )
};
export default App;
