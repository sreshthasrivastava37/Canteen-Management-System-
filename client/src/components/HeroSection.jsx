import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function HeroSection() {
  const { authinfo } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  px-5 bg-dark fixed-top ">
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
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
                    <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">
                  About
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
                <NavLink className="nav-link text-white" to="/signup">
                  SignUp
                </NavLink>
              </li>
             
              </>
              ) : (
                <>  
                
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/additems">
                      AddFood
                    </NavLink>
                  </li>                   
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/logout">
                  Logout
                </NavLink>
              </li> 
              </>
              )}            
            </ul>
          </div>
        </div>
      </nav> 
    </div>
  )
}
