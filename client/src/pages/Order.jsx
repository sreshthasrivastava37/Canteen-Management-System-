import HeroSection from "../components/HeroSection"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function Order() {
  const { token } = useContext(AuthContext);
  if (token != null) return <div>order</div>;
  else return ( 
 <div>
  <HeroSection/>
  <Navigate to="/signin"></Navigate>;

  </div>
  ) 
}