import React, { useState } from 'react';
import "./ComponentOfTab.css"
import { Box, Tabs, Text } from '@radix-ui/themes';
import women1 from '../../Images/women1.jpeg'
import women2 from '../../Images/women2.jpeg'
import women3 from '../../Images/women3.jpeg'
import women4 from '../../Images/women 4.jpeg'
import kid1 from '../../Images/kid1.jpeg'
import kid2 from '../../Images/kid2.jpeg'
import kid3 from '../../Images/kid3.jpeg'
import kid4 from '../../Images/kid4.jpeg'
import photo1 from '../../Images/marketplace1.jpeg'
import photo2 from '../../Images/marketplace2.jpeg'
import photo3 from '../../Images/marketplace3.jpeg'
import {BsFillCartPlusFill} from 'react-icons/bs'

const ComponentOfTab = () => {
  
const [activeTab,setActiveTab] = useState("Gents")
    return (
     <>
     <div className='text-box  uppercase'>
      <h1 className='  font-black   text-3xl '>
      elevate Your Style with Our Latest Collection
      </h1>
      <p className=''>
      Each piece is crafted to enhance your fashion statement.
      </p>
     </div>
      <div className=' flex justify-content: space-between;'>
        <div>
             <Tabs.Root   value={activeTab}
    onValueChange={(newValue) => setActiveTab(newValue)}  >
  <Tabs.List className='CustomTabButton'>
    <Tabs.Trigger  value="Gents">Gents</Tabs.Trigger>
    <Tabs.Trigger value="Women">Women</Tabs.Trigger>
    <Tabs.Trigger value="Kids">Kids</Tabs.Trigger>
    <Tabs.Trigger value="Top Sell">Top Sell</Tabs.Trigger>
  </Tabs.List>

  <Box  >
    <Tabs.Content value="Gents" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
    
    <div className='marketPlaceContainer grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3 md:grid-cols-4 md:gap-x-5 gap-y-3 m-5    '>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={photo1}  /></figure>
  <div className="text-center">
   
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
   
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
     <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={photo3}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1099</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={photo2}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={photo3}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
      </div>

    
     </div>
     

    </Tabs.Content>

    <Tabs.Content value="Women" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
    
    <div className='marketPlaceContainer grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3 md:grid-cols-4 md:gap-x-5 gap-y-3 m-5    '>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women1}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Womens Premium Pink Top </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>2090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women2}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Womens Premium blue Top </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1590</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women3}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Womens Premium  Top </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1990</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women4}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Womens Premium Yellow Top </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1890</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
{/* ========================================= */}

{/* --------------------------- */}





        </div>

    
     </div>
    </Tabs.Content>

    <Tabs.Content value="Kids" className='text-left flex justify-content: space-between; ' >
    <div  className="elementor-widget-wrap elementor-element-populated">
    
    <div className='marketPlaceContainer grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3 md:grid-cols-4 md:gap-x-5 gap-y-3 m-5    '>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={kid1}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Kids Premium Punjabi </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={kid2}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Kids Premium Punjabi </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={kid3}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Kids Premium Punjabi </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={kid4}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Kids Premium Punjabi </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
{/* ========================================= */}

{/* --------------------------- */}





        </div>

    
     </div>
     
    </Tabs.Content>
    <Tabs.Content value="Top Sell" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
    
    <div className='marketPlaceContainer grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3 md:grid-cols-4 md:gap-x-5 gap-y-3 m-5    '>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={photo3}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women1}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={kid1}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
            <div className="card card-compact md:w-50  bg-base-100 shadow-xl">
  <figure><img src={women2}  /></figure>
  <div className="text-center">
    <h2 className="text-xl font-semibold">Mens Premium Jacket </h2>
    <h4 className='text-md text-slate-400 font-medium mt-2'>Starts From</h4>
    <h3 className='font-bold text-xl mt-3'>1090</h3>
    <div className="parentButton flex mt-5 ">
      <button className="btn custom_button  rounded-none  rounded-l-lg flex-auto mr-1 w-50">Buy Now</button>
      <button className="btn custom_button rounded-none rounded-r-lg flex-auto    w-50"><BsFillCartPlusFill></BsFillCartPlusFill></button>
    </div>
  </div>
</div>
{/* ========================================= */}

{/* --------------------------- */}





        </div>

    
     </div>

    </Tabs.Content>
  </Box>
</Tabs.Root>
        </div>
        
        </div>
     </>
    );
};

export default ComponentOfTab;