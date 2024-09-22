import { useState, useContext } from "react";
import AdditemsUi from "../../../client/src/components/AdditemsUi";
import { AuthContext } from "../context/AuthContext";
export default function AddItems() {
  const { authinfo } = useContext(AuthContext);
  console.log(authinfo);
  const [eventinfo, seteventinfo] = useState({
    foodname: "",
    foodcategory: "",
    description: "",
    price: "",
    foodimg:""
  });
  console.log(authinfo);
  
  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    seteventinfo({ ...eventinfo, [targetname]: value });
  };
  const handleInputimage = (e) => {
    seteventinfo({ ...eventinfo, foodimg: e.target.files[0] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("foodname", eventinfo.foodname);
    formData.append("foodcategory", eventinfo.foodcategory);
    formData.append("description", eventinfo.description);
    formData.append("price", eventinfo.price);
    formData.append("foodimg", eventinfo.foodimg);
    formData.append("userId", authinfo.email);
    try {
      const p = await fetch(`http://localhost:3000/additems`, {
        method: "POST",
        body: formData,
      });
      alert("Food Uploaded");
      seteventinfo({
        ...eventinfo,
        foodname: "",
    foodcategory: "",
    description: "",
    price: "",
    foodimg:"",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div style={{marginTop:"10px", height:"100px"}}>
     <div style={{marginTop:"80px", height:"100px", textAlign:"center",fontFamily: "Italic"}}>
      <h1>Add Food Item</h1>
      </div>
    </div>
   
    <AdditemsUi
      eventinfo={eventinfo}
      handleInput={handleInput}
      handleInputimage={handleInputimage}
      handleSubmit={handleSubmit}
      
    ></AdditemsUi>
    </>
  );
}