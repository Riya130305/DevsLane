import React from 'react';
import {Link} from 'react-router-dom';
import ProductArragement from './ProductArragement';
// import Not from ".\assets\image.png";
function NotFoundPage(){
    return (
        <div>
            <img scr="https://userway.org/blog/wp-content/uploads/2024/03/The-404-Page_-How-To-Turn-a-404-Error-Into-a-Win-for-Your-Website.jpg" 
            alt="Page Not Found"/>
            <h1 className="text-3xl text-indigo-500">Page Not Found</h1>
            <Link to={"/"}>
                <h1 className="text-white text-2xl border border-blue-300 p-2" >Go Homeuyuih</h1>
            </Link>
        </div>
    )
}

export default NotFoundPage;