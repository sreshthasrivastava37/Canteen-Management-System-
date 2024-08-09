import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import './Navbar.css'
export default function Navbar() {
  const { authinfo } = useAuth();
  return (
  <header>

      <nav className="navbar navbar-expand-lg fixed-top px-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            Quick-Bite
          </NavLink>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
           text-white="true">
            <span className="navbar-toggler-icon " ></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {/* <form className="d-flex text-white mt-2 " style={{width:"400px"}}>
        <input className="form-control me-2 bg-dark text-white " type="search" placeholder="Search for food" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
        
              <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/allitem">
                     Menu
                    </NavLink>
                  </li>
             
              {authinfo == null ? (
                <>
                 <li className="nav-item">
                <NavLink className="nav-link text-white" to="/signin">
                  SignIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="signup">
                  SignUp
                </NavLink>
              </li>
             
              </>
              ) : (
                <>
                <li className="nav-item">
                <NavLink className="nav-link text-white" to="/order">
                  Orders
                </NavLink>   
                </li>  
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/additems">
                      AddFood
                    </NavLink>
                  </li>  
                  
                 
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="logout">
                  Logout
                </NavLink>
              </li> 
              </>
              )}  
            </ul>
           
          </div>
        </div>
       
      </nav>
      
      
    {/* carousel start */}
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
   
        <div className="carousel-indicators" >
       
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
        
          <div className="carousel-item active" data-bs-interval={5000}>
            <img src="img\carousel2.jpg" className="d-block w-100 " alt="..." height="743px" />
            <div className="carousel-caption d-none d-md-block">
        <h5>Order your <br/>favourite food here</h5>
        <p>Some representative placeholder content for the first slide.</p>
       
        <NavLink className=" text-white" to="/menu">
        <button className="btn btn-white"> Go to Menu</button>
       </NavLink>
       
         
      </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="img\carousel2.jpg" className=" d-block w-100 " alt="..." height="743px" />
            <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <NavLink className=" text-white" to="/menu">
        <button className="btn btn-white"> Go to Menu</button>
       </NavLink>
      </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="img\carousel2.jpg" className="d-block w-100 " alt="..." height="743px" />
            <div className="carousel-caption ">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <NavLink className=" text-white" to="/menu">
        <button className="btn btn-white"> Go to Menu</button>
       </NavLink>
      </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  </header>
  );
}