import { useState } from "react";



function Card({id,name,info,image,price,removehandler}){

    const value=info.substring(0,200);
    const[render,setrender]=useState(false);
    function clickbtn(){
        if(render){
            setrender(false)
        }
        else{
            setrender(true)
        }
    }
    


  const description=render ? info : `${value}`;


    return(

        
        <div className="card">
            <img   src={image} className="images"></img>

           <div>
           <div className="price">
                <div className="priceinfo">₹{price}</div>
                <div className="nameinfo">{name}</div>

            </div>
            <div className="describe">
                {description}
                <span onClick={clickbtn} className="btn"> {render ? `Show Less` : `...Show More`   }  </span>
            </div>
           </div>
            <button onClick={()=>{removehandler(id)}}  className="red-btn">

                Not Interested
            </button>


        </div>
    


       



    )


}
export default Card;