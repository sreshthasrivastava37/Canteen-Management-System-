import { useState } from "react";
import Signup from "./SignUp";

export default function SignupParent() {
  const [userinfo, setuserinfo] = useState({
    name: "",
    mobile_number: "",
    email: "",
    password: "",
  });
  
  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    setuserinfo({ ...userinfo, [targetname]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     console.log('Welcome')
      const p = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(userinfo),
      });
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Signup
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></Signup>
  );
}