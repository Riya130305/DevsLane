import { useState } from 'react';
import ProductList from './ProductList'
// import Navbar from './Navbar';
// import amazonLogo from './assets/Amazon_(company)-Logo.wine.png';
// import Footer from './Footer';
import getProduct from './api';
import { useEffect } from 'react';
import Loading from './Loading';
import NotFoundPage from './NotFoundPage';

function ProductArragement({xyz}){
    const [query,setQuery]=useState("");
    const [data,setData]=useState([]);
    const [sort,setSort]=useState("Default");
    const [loading,setLoading]=useState(true);
  // let d=allData; 
  //USESTATE FOR SEEING UPDATIONS
  
  // UseEffect 

  useEffect (function(){
    const p=getProduct();

    p.then(function(response){
      // console.log("reponse ",response.data.products)
      // to not give dummy data taking data from server
      setData(response.data.products);
      setLoading(false);
      // setData(allData);
  })
    .catch(function(error){
      setLoading(false);
  });
    
},[]);

    // if(loading)
    // {
    //     return <Loading/>;
    // }
    // if(!loading)
    // {
    //     return <NotFoundPage/>;
    // }
  function handleChange(event){
    const newQuery=event.target.value;
    let newData=data.filter(function(item){
      return item.title.toLowerCase().indexOf(newQuery.toLowerCase())!=-1;
   })

   console.log("new data is",data);
   setQuery(newQuery);//TO MAKE UPDATION WHEN WE USE INPUT (USESTATE)
   setData(newData);//TO MAKE UPDATION WE USE USESTATE(TO show required  CARD)

  }
  if(sort === "price-low-high")
  {
      data.sort(function(x,y)
      {
        return x.price < y.price ? -1 : x.price > y.price ? 1 : 0;
      })
  }
  else if(sort ==="price-high-low")
  {
    data.sort(function(x,y)
    {
      return  x.price < y.price ? 1 : x.price > y.price ? -1 : 0;

    }
  )
  }
  else if(sort ==="Sort by title")
  {
     data.sort(function(x,y)
    {
      return x.title<y.title ? -1:1;
    }
  )
  }
  function handleSortChange(event){
    setSort(event.target.value);
  }
  return (
    <>
     <div className="min-h-screen  bg-gray-700">
      <div className="bg-white">
      {/* <Navbar img={amazonLogo} alt="amazon" /> */}

    <div className="p-10">
      <div className=" flex justify-end items-end mt-5">
        <select 
          value={sort}
          onChange={handleSortChange}
          className="border p-2 rounded">

          <option value="default">Default sorting</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="Sort by title">Sort by title</option>
          
        </select>
      </div>

     <div>
      <input 
        value={query} //taking current query from the usestate
        className="border border-gray-600 p-2 rounded-lg" 
        placeholder='Search'
        onChange={handleChange}/>
     </div>
      <ProductList product={data}  pqr={xyz} ></ProductList>
   
     <div className="flex gap-3">
                <button className="border border-red-400 p-3 text-white bg-red-700 ">1</button>
                <button className="border border-red-400 p-3 text-red-700 ">2</button>
                <button className="border border-red-400 p-3 text-red-700 ">"-"</button>
      </div>
     </div>
    </div>
    
    </div>

    </>
  )
};


export default ProductArragement;