import HeroSection from "../components/HeroSection";
export default function AdditemsUi({ eventinfo, handleInputimage,handleInput, handleSubmit }) {
    return (
      <>
      <HeroSection/>
        <div className=" mt-5 " >
          <form method="POST" onSubmit={handleSubmit} className="mt-5" style={{maxWidth: "540px",paddingRight:" 15px",
             paddingLeft: "15px", marginRight: "auto", marginLeft: "auto",}} >
            <input
              type="text"
              className="form-control mt-4"
              name="foodname"
              placeholder="Enter Name of Food"
              value={eventinfo.foodname}
              onChange={handleInput}
            ></input>
            <input
              type="text"
              className="form-control mt-4"
              name="foodcategory"
              placeholder="Enter Food Category"
              value={eventinfo.foodcategory}
              onChange={handleInput}
            ></input>
            <input
              type="text"
              className="form-control mt-4"
              name="description"
              placeholder="Enter Food Description"
              value={eventinfo.description}
              onChange={handleInput}
            ></input>
            
            <input
              type="number"
              className="form-control mt-4"
              name="price"
              placeholder="Price"
              value={eventinfo.price}
              onChange={handleInput}
            ></input>
           <input
            type="file"
            className="form-control mt-4"
            name="foodimg"
           
            onChange={handleInputimage}
          ></input>
           
            <button className="btn btn-outline-dark mt-4 text-dark" style={{marginBottom:"100px"}}>Add food</button>
          </form>
        </div>
      </>
    );
  }