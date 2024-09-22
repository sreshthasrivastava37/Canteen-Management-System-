import React from 'react'
import '../pages/Menu.css'

export default function Cardmenu({item}) {
  return (
    <>  
    
    <div className='food_section col-md-4 mt-4 '>
      <div class="box mt-5 ms-5">
        <div className='img-box'>
        <img className='text-dark' src={item.foodimg} class="card-img-top" alt={item.foodimg}/>
        {/* <p className='text-dark'>{item.foodimg}</p> */}
        </div>
      
        <div class="detail-box">
            <h5 class="card-title">{item.foodname}</h5>
            <p class="card-text">{item.foodcategory}</p>
            <p class="card-text">{item.description}</p>
            <p class="card-text">{item. price}</p>
            <button className="btn bg-light h-10 w-10  justify-center ms-2" >Add to Cart</button>
            <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    }
    )}
  </select>
           
        </div>
        </div>
    </div>

</>
  )
}
