import { NavLink } from "react-router-dom";
import React from "react";
export default function footer() {
  return (
   
      <footer className="py-5 bg-dark " >
        <div className="row justify-content-between ms-5" >
          <div className="col-3 text-light ms-5" >
            <h5>Contact Us</h5>
            <ul className="nav flex-column ms-4">
              <li className="nav-item mb-3">
                <p>Location</p>
              </li>
              <li className="nav-item mb-3">
                <p>Call +1234567890</p>
              </li>
              <li className="nav-item mb-3">
                <p>demo@gmail.com</p>
              </li>
             

            </ul>
          </div>
          <div className="col-3 text-light ms-5">
            <h5>Quick Bite</h5>
            <ul className="nav flex-column">
              <li>
                <p>Streamline your meal experience with our canteen ordering system – fast, convenient, and tailored to your tastes.</p>
              </li>
            </ul>
          </div>
          <div className="col-3 text-light">
            <h5>Opening Hours</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
               <p>Everyday</p>
              </li>
              <li className="nav-item mb-3">
                <p>10.00 Am -7.00 Pm</p>
              </li>
              
            </ul>
            
          </div>
          <div className="d-flex justify-content-between py-4 my-4  text-light ">
  <p>© 2021 Company, Inc. All rights reserved.</p>
</div>
        </div>


      </footer>
   
  );
}
