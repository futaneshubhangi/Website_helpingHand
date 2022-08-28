import img1 from "../images/Ish.jpeg";
import img2 from "../images/pra.jpeg";
import img3 from "../images/vais.jpeg";
import img4 from "../images/shubh.jpg";
const Team=()=>{
    return(
        <>
      <div class="container mt-5">
  <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem", color:"black"}}>
                <img src={img1} class="card-img-top" alt=" "/>
                    <div class="card-body">
    
                        <p class="card-text ">Gund Ishwari</p>
    
                     </div>
            </div>
      
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem", color:"black"}}>
                <img src={img2} class="card-img-top" alt=" "/>
                    <div class="card-body">
    
                        <p class="card-text ">Sabale Pratiksha</p>
    
                     </div>
            </div>
      
    </div>
    
  </div>
</div>

<div class="container mt-4">
  <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem", color:"black"}}>
                <img src={img3} class="card-img-top" alt=" "/>
                    <div class="card-body">
    
                        <p class="card-text ">Auti Vaishnavi</p>
    
                     </div>
            </div>
      
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem", color:"black"}}>
                <img src={img4} class="card-img-top" alt=" "/>
                    <div class="card-body">
    
                        <p class="card-text ">Futane Shubhangi</p>
    
                     </div>
            </div>
      
    </div>
    
  </div>
</div>
        </>
    )
}
export default Team;