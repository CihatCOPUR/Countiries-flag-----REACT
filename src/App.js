

import "../src/index.css";
import { useState,useEffect } from "react";
import Card from "./Card";
import axios from "axios";


function App() {

  const  [countries, setCountries] = useState([])


useEffect(() => {
  axios(`https://restcountries.com/v3.1/all`).then((res)=>setCountries(res.data))

  
}, [])

  
console.log(countries)


  return (<>
<h1 className="header text-center display-1 ">Countries</h1>
    <div className="parent mt-5 text-center" >
   
   
      
    {countries.map((item)=>{
      return(
        <Card key={item.name.common} {...item}/>
      )
    })}
     

    </div></>
  )
}

export default App;
