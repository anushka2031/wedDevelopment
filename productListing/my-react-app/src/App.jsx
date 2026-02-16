import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
   

  let [apiData, SetData] = useState([]);
 
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res) => {
      return res.json()
      // console.log(res);
      
    })
    .then((data) =>{
      console.log(data);
      
      SetData(data.products)
    })
  },[])

  return (
    <div id='container'>
      {/* <input type='text' name='search'/> */}
      {/* <input type="submit" /> */}
      {apiData.map((res) =>{
        return <div id='products'>
                  <h1>{res.title}</h1>
                  <img src={res.images[0]} alt="" />
                  <h2>{res.name}</h2>
                  <h3>{res.price}</h3>
              </div>
      })}

      {/* {
        apiData.filter((res) =>{
          res.price > 600
          
        })
        // .sort((a,b) =>{
            
        //   })
      } */}
   
    </div>
  )
}

export default App