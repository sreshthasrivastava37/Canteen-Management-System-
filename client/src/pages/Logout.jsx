import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
// import HeroSection from "../components/HeroSection";
export default function Logout() {
  const {deleteToken} = useContext(AuthContext);
  useEffect(() => {
    deleteToken();
  }, [deleteToken]);

  
  return  <Navigate to="/signin"></Navigate> 
}