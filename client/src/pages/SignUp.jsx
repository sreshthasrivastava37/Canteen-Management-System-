import { NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
export default function SignUp({ userinfo, handleInput, handleSubmit }) {
  return (
    <>
    <HeroSection />
      <div className="container mt-3 ">
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mt-3"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleInput}
            value={userinfo.name}
          ></input>
          <input
            type="tel"
            className="form-control mt-3"
            name="mobile_number"
            placeholder="Enter Your mobile number"
            value={userinfo.mobile_number}
            onChange={handleInput}
          ></input>
          <input
            type="email"
            className="form-control mt-3"
            name="email"
            placeholder="Enter Your email-id"
            value={userinfo.email}
            onChange={handleInput}
          ></input>
          <input
            type="password"
            className="form-control mt-3"
            name="password"
            placeholder="Enter Your password"
            value={userinfo.password}
            onChange={handleInput}
          ></input>
          <button className="btn btn-outline-primary mt-3">SignUp</button>
          <NavLink to="/signin" className="mt-3 btn btn-outline-primary ms-2">Already a user</NavLink>
        </form>
      </div>
    </>
  );
}
