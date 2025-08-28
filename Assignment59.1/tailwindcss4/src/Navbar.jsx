import React from "react";
import { IoBagOutline } from "react-icons/io5";
function Navbar({img,alt,ProductCount}){
return (
    <nav className="pl-25 bg-white shadow-md">
      <div className="flex text-4xl justify-between items-center">
        <img src={img} alt={alt} className="h-20 w-20 " />
        <div className="flex flex-col items-center">
          <IoBagOutline className=" text-red-400 cursor-pointer "/>
          <span className="-m-7 text-xl"> {ProductCount }</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;