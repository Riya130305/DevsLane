import {useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import {getProductDetails} from './api';
import { HiArrowSmLeft ,HiArrowSmRight} from "react-icons/hi";
import Loading from './Loading';
import NotFount from './NotFoundPage';

function ProductDetails({onAddToCard}){
    const [count,setCount]=useState(1);
    const [loading,setLoading]=useState(true);
    const [prod,setProduct]=useState(null);//useState 


    const param = useParams();//useParams is the object
    const id = +param.id;
    console.log("id is"+id);

    useEffect(function(){
        const p=getProductDetails(id);
        setCount(1);
        p.then(function(response){//promise
            setProduct(response.data);
            setLoading(false);
        })
        .catch(
            function(error){
                console.log("Api mai kuch nhi hai");
                setLoading(false);
            }
        )
    },[id]);//id isliye di hai kyuki jo bhi changes ho wo tb bhi changeho jb id mai change aaya hai
        
    // Onchange function 
    
    function handleCountChange(event){
       const value = +event.target.value;
        setCount(value < 1 ? 1 : value);
    }

    function handleButtonClick(){
        onAddToCard(id, count);
    }
    if(loading)
    {
        return <Loading/>;
    }
    if(!prod)
    {
        return <NotFoundPage/>;
    }
    return(
        prod &&//Use state mai jo name dete hai nah wahi name likhna hota hai like prod
        <>  
        <div className="p-4 bg-gray-100">
            <div className="flex bg-white">
                <div className="w-full h-full md:w-1/2 flex justify-center items-center">
                    <img className="w-full object-cover" src={prod.thumbnail} alt={prod.title}/>
                </div>
            <div className="w-1/2 pl-6 ">
                <h1 className="text:2xl md:text-4xl text-gray-500 ">{prod.title}</h1>
                <p className="font-bold text-xs text-black py-4 md:text-2xl">{prod.price}</p>
                <p className="font-bold text-xs text-red-500 py-4 md:text-2xl">{prod.rating}</p>
                
                <div className="flex gap-2 mt-4 md:mt-5">
                    {/* <button className="border border-gray-400 text-xs p-0.2 md:py-3 px-5">1</button> */}
                    <input 
                    className="p-1 text-sm border border-red-800" 
                    type="number"
                    min="1"
                    value={count} 
                    onChange={handleCountChange}/>
                    <button 
                    onClick={handleButtonClick}
                    className="text-white bg-red-500 text-sm md:py-3 px-3 border rounded-md cursor-pointer">ADD TO CART</button>
            </div>
        </div> 
             <div className="flex justify-between items-center px-4 py-2 ">
           { id>1 && (
            <Link className="text-indigo-700 text-2xl px-3 flex" to={"/product/"+(id-1)} >
                <HiArrowSmLeft />
                <span>Previous</span>
            </Link>)}
    
            <Link className="text-indigo-700 text-2xl px-3 flex" to={"/product/"+(id+1)} >
                <HiArrowSmRight />
                <span>Next</span>
            </Link>
        
    </div>
    </div>
    </div>

    </>
    )
};

export default ProductDetails;