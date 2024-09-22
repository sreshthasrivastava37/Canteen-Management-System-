import { NavLink } from "react-router-dom";
// import './Menu.css'
import HeroSection from "../components/HeroSection";
export default function Menu() {
  const handleAddtoCart=()=>{

  }
  // const filtersMenu= document.querySelectorAll(".filters_menu button")
  // const filterContent = document.querySelectorAll(".filter-content .box")
  // console.log(filtersMenu, filterContent)
  // // define the filter class function
  // const filterCards=e=>{
  //   document.querySelector(".active").classList.remove("active")
  //   e.target.classList.add("active")
  //   filterContent.forEach((box) => {
  //     box.classList.add("hide")
  //     if(box.dataset.name===e.target.dataset.name||e.target.dataset.name==="all"){
  //       box.classList.remove("hide")
  //     }
  //   })
  // }
  // // add click event listener to each filter buttons
  // filtersMenu.forEach(button =>  button.addEventListener("click", filterCards))
  

  return (
  <>
    <HeroSection/>
      <section className="food_section ">
      <div className=" container ">
<h1 style={{fontFamily: "Italic", textAlign:"center",marginTop:"100px"}}>Our Menu</h1>

<div className="filters_menu" >
 
        <button className=" btn active mx-4" data-filter="all">All</button>
        <button className="btn mx-4" data-filter="snacks" >Snacks</button>
        <button className="btn mx-4" data-filter="desserts">Desserts</button>
        <button className="btn mx-4" data-filter="beverages">Beverages</button>       
      </div>
      </div>
      <div className="filter-content" style={{alignItems:"center"}}>
        <div className="row grid ms-5">
          {/* 1 */}
          <div className="col-sm-4 col-lg-3 all snacks mx-5 " data-filter="snacks">
            <div className="box">
              <div className="img-box">
                <img src="img\samosa2.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6 className="d-inline ">$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  <select className="m-2 h-10 w-10 bg-light rounded">
<option value="half">Half</option>
<option value="full">Full</option>
  </select>
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>            
          </div>
          {/* 2 */}
          <div className="col-sm-4 col-lg-3 all snacks mx-5" data-filter=".snacks">
            <div className="box">
              <div className="img-box">
                <img src="img\momos.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$2</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  <select className="m-2 h-10 w-10 bg-light rounded">
<option value="half">Half</option>
<option value="full">Full</option>
  </select>
 
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>

</div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-sm-4 col-lg-3 all beverages mx-5" data-filter=".beverages" >
            <div className="box">
              <div className="img-box">
                <img src="img\coffee.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  <select className="m-2 h-10 w-10 bg-light rounded">
<option value="half">Half</option>
<option value="full">Full</option>
  </select>
 
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-sm-4 col-lg-3 all beverages mx-5" data-filter=".beverages">
            <div className="box">
              <div className="img-box">
                <img src="img\SweetLassi.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  <select className="m-2 h-10 w-10 bg-light rounded">
<option value="half">Half</option>
<option value="full">Full</option>
  </select>
 
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 5 */}
          <div className="col-sm-4 col-lg-3 all desserts mx-5" data-filter=".desserts">
            <div className="box">
              <div className="img-box">
                <img src="img\waffle.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  
  
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 6 */}
          <div className="col-sm-4 col-lg-3 all snacks mx-5" data-filter=".snacks">
            <div className="box">
              <div className="img-box">
                <img src="img\sandwich.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
 
  
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 7 */}
          <div className="col-sm-4 col-lg-3 all beverages mx-5" data-filter=".snacks">
            <div className="box">
              <div className="img-box">
                <img src="img\samosa2.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
  
  
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 8 */}
          <div className="col-sm-4 col-lg-3 all beverages mx-5" data-filter=".beverages">
            <div className="box">
              <div className="img-box">
                <img src="img\cola.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
 
 
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 9 */}
          <div className="col-sm-4 col-lg-3 all desserts mx-5" data-filter=".desserts">
            <div className="box">
              <div className="img-box">
                <img src="img\ice-cream.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
 
  
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
          {/* 10 */}
          <div className="col-sm-4 col-lg-3 all snacks mx-5 mb-5" data-filter=".snacks">
            <div className="box">
              <div className="img-box">
                <img src="img\Chole_Bhature.jpg"/>
              </div>
<div className="detail-box"> 
<h5>Delicious Pizza </h5>
<p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
<div className="options">
  <h6>$1</h6>
  <select className=" quantity m-2 h-10 w-10 bg-light rounded">
    {Array.from(Array(6),(e,i)=>{
      return <option key={i+1} value={i+1}>{i+1}</option>
    })}
  </select>
 
 
</div>
<hr>
</hr>
<button className="btn bg-light h-10 w-10  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
</div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>

  )
}
