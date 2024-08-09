import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUpParent from "./pages/SignUpParent";
import Logout from "./pages/Logout";
// import SearchFood from "./pages/SearchFood";
import AddItems from "./pages/AddItems";
import LoginUserinfo from "./components/LoginUserinfo";
import Allitem from "./pages/Allitem";
// import { CartProvider } from "./pages/CartParent";
const App = () => {
  return (
    <>
      <BrowserRouter>  
      <LoginUserinfo/> 
      {/* <CartProvider>*/}
        <Routes>                      
          <Route index element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order" element={<Order />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUpParent />}></Route>
          <Route path="/logout" element={<Logout />}></Route> 
          <Route path="/additems" element={<AddItems />}></Route>
          {/* <Route path="/searchfood" element={<SearchFood />}></Route>   */}
          <Route path="/allitem" element={<Allitem />}></Route>  
        </Routes>

        {/* </CartProvider> */}
      </BrowserRouter>
    </>
  );
};

export default App;