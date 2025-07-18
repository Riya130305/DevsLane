import React from 'react';

function Navbar({ img, alt }) {
  return (
    <nav className="pl-25 bg-white shadow-md">
      <img src={img} alt={alt} className="h-20 w-20 " />
    </nav>
  );
}

export default Navbar;
