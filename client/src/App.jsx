import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUpParent from "./pages/SignUpParent";
import Logout from "./pages/Logout";
import AddItems from "./pages/AddItems";
import LoginUserinfo from "./components/LoginUserinfo";
import Allitem from "./pages/Allitem";

const App = () => {
  return (
    <>
      <BrowserRouter>  
      <LoginUserinfo/> 
        <Routes>                      
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>        
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUpParent />}></Route>
          <Route path="/logout" element={<Logout />}></Route> 
          <Route path="/additems" element={<AddItems />}></Route>
          <Route path="/allitem" element={<Allitem />}></Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;