import React, { useState } from "react";
import data from './data.js';
import Tours from './parts/tours.js';



const App = () => {

  const[currentdata,setdata]=useState(data);
 
  function removeHandler(id){
    const newdata=currentdata.filter( (obj)=>{if(obj.id!==id){
      return obj;
    }
    
    
    
    }          )
    
    setdata(newdata);
    
    
  }
  function refresh(){
    setdata(data)
  }
  if(currentdata.length==0){
   return(
    <div className="refreshbtn">
    <h1 className="left">No Tours Left</h1>
    <button onClick={refresh} className="btn-white">
         Refresh
         </button>
 
    </div>

   )
}
  
  


  return (
    <div>
     <Tours currentdata={currentdata}  removehandler={removeHandler}></Tours>
    </div>
  )
}

export default App;
