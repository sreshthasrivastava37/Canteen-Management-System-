import React from 'react'
import HeroSection from '../components/HeroSection'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <>
      <HeroSection/>
      <div class=" bg-dark" id="scrollspyHeading2" style={{marginTop:"56px"}}>
<div class="row bg-dark">
<div class="col-lg-5 bg-dark" style={{marginLeft:"50px"}}>
    <img className=" mt-2"src="img\about-img (1).png" alt="" height={"670px"}/>
</div>

    <div class="card col-lg-6 text-light  bg-dark" style={{ fontSize: "large"}} >
        <div class="card-body mt-5">
          <h5 class="card-title" style={{fontSize: "1.8rem", marginTop:"144px", fontStyle:"italic"}}>Quick Bite</h5>
          <p class="card-text" style={{color: "white"}}>Our canteen ordering system is designed to streamline your dining experience, making it easier and more convenient than ever. With a user-friendly interface, you can quickly browse the menu, customize your orders, and schedule pickups—all from your smartphone or computer. Say goodbye to long queues and hello to hot, delicious meals ready when you are. Whether you’re grabbing a quick snack or planning a full meal, our system ensures you get exactly what you want with minimal wait time. Enjoy a seamless and efficient dining experience, all at your fingertips.</p>
       
        </div>
      </div>
</div>
     </div>
    </>
  )
}
