import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AddItems from "./AddItems";
import Allitem from "./Allitem";
import About from "./About";
import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { authinfo } = useAuth();
  return (
    <>
   <div>
    <Navbar/></div>
    <div><Allitem/></div>
    <div><About/></div>
    {authinfo == null ? (
                <>
                 </>
              ) : (
                <>  
    
    <AddItems></AddItems>
    
    </>
              )}  
              <div><Footer/></div>
    </>
    
  );
}