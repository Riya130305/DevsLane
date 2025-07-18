import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import amazonLogo from './assets/Amazon_(company)-Logo.wine.png';
import Footer from './Footer';
function App() {
  return (
    <div class="min-h-screen  bg-gray-700">
      <div className="bg-white">
      <Navbar img={amazonLogo} alt="amazon" />
      
   
    <div className="p-10">
      <div className=" flex justify-end items-end mt-5">
        <select className="border p-2 rounded">
          <option value="default">Default sorting</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
        </select>
      </div>

      
    <div className="p-2 flex flex-wrap border border-white h-auto shadow-2xl rounded-md grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Product className="bg-gray-700 " img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://www.fnp.com//images/pr/l/v20230413114748/3d-ceramic-white-matte-marble-coffee-mug_1.jpg" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://tse3.mm.bing.net/th/id/OIP.qm6OjZHWGyABUJwLmcInqAHaG8?pid=Api&P=0&h=180" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://tse2.mm.bing.net/th/id/OIP.KtxQ5FLj3svaK6VMhlGENwHaE8?pid=Api&P=0&h=180" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
        <Product img="https://th.bing.com/th/id/OIP.filw4PVRwFzxLD_BcB4rzQHaIl?w=160&h=186&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" title="Mugs" category="Black Printer Coffee Mug" price={"$"+19.99} rating={4.5} />
      <div className="flex gap-3">
          <button className="border border-red-400 p-3 text-white bg-red-700 ">1</button>
          <button className="border border-red-400 p-3 text-red-700 ">2</button>
          <button className="border border-red-400 p-3 text-red-700 ">-></button>

      </div>
    </div>
     </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;

      

