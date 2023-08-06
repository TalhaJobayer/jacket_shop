import React from 'react';
import photo1 from '../../Images/marketplace1.jpeg'
import photo2 from '../../Images/marketplace2.jpeg'
import photo3 from '../../Images/marketplace3.jpeg'

const MarketPlaceProduct = () => {
    return (
        <div className='marketPlaceContainer grid grid-cols-4  '>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default MarketPlaceProduct;