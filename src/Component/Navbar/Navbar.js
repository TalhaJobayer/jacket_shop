import React from 'react';
import UserPhoto from '../../Images/IMG_20200702_024444_108.jpg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Home</button>
          <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Shop</button>
          <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">About</button>
          <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Contact</button>
          <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Service</button>
            </ul>
          </div>
          <a className="text-3xl 
           font-serif 
           font-bold
           font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900
           hover:from-blue-700 hover:to-yellow-500
           ">Talha Fashion</a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal gap-x-4">
          <button class="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Home</button>
          <button class="  font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Shop</button>
          <button class=" font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">About</button>
          <button class="  font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Contact</button>
          <button class="  font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-700 hover:to-yellow-500 ">Service</button>
          </ul>
        </div>
        <div className='flex justify-end'>
                  {/* cart imoji start======================================= */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
     {/* cart imoji end======================================= */}
     {/* user info start============================= */}
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={UserPhoto} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
         {/* user info start============================= */}
        </div>
        
 

       
      </div>
    );
};

export default Navbar;