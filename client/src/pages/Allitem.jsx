import React, { useEffect,useState } from 'react'
import Cardmenu from '../components/Cardmenu'
import HeroSection from '../components/HeroSection';
export default function Allitem() {
    const [data,setdata] = useState([]);
    console.log(data)
    const fetchdata = async()=>{

        const response = await fetch(`http://localhost:3000/allitem`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const x = await response.json();
          setdata(x);
          
    }

    useEffect(() => {
      fetchdata();
    },[])

  return (
    <div >
      <HeroSection/>
    <h1 style={{fontFamily: "Italic", textAlign:"center",marginTop:"50px"}}>Our Menu</h1>
    <div className='container'>
        <div className='row'>
            {data.map((item)=>{
               return <Cardmenu item={item}/>
            })}
        </div>
    </div>
    </div>
  )
}
