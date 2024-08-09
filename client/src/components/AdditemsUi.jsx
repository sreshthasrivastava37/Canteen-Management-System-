import HeroSection from "../components/HeroSection";
export default function AdditemsUi({ eventinfo, handleInputimage,handleInput, handleSubmit }) {
    return (
      <>
      <HeroSection/>
        <div className="container mt-3">
          <form method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mt-3"
              name="foodname"
              placeholder="Enter Name of Food"
              value={eventinfo.foodname}
              onChange={handleInput}
            ></input>
            <input
              type="text"
              className="form-control mt-3"
              name="foodcategory"
              placeholder="Enter Food Category"
              value={eventinfo.foodcategory}
              onChange={handleInput}
            ></input>
            <input
              type="text"
              className="form-control mt-3"
              name="description"
              placeholder="Enter Food Description"
              value={eventinfo.description}
              onChange={handleInput}
            ></input>
            {/* <input
              type="date"
              className="form-control mt-3"
              name="startdate"
              value={eventinfo.startdate}
              onChange={handleInput}
            ></input> */}
            <input
              type="number"
              className="form-control mt-3"
              name="price"
              placeholder="Price"
              value={eventinfo.price}
              onChange={handleInput}
            ></input>
           <input
            type="file"
            className="form-control mt-3"
            name="foodimg"
            // value={eventinfo.foodimg}
            onChange={handleInputimage}
          ></input>
           
            <button className="btn btn-outline-primary mt-3">Add food</button>
          </form>
        </div>
      </>
    );
  }