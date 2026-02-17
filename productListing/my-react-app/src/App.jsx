import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
   

  let [apiData, SetData] = useState([]);
  const [filterData , setFilteredData] = useState([]);
  const [search , setSearch] = useState("");
  const [sorted , setSorted] = useState("")
 
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res) => {
      return res.json()
      // console.log(res);
      
    })
    .then((data) =>{
      console.log(data);

      
      SetData(data.products)
      setFilteredData(data.products)
      
    })
  },[])

  const handleSearch = () =>{
    if(!search.trim()) {
      alert("Search feild is empty!")
      return;
    }

    const filtered = apiData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    // console.log(filterData);
    
    setFilteredData(filtered)
  }

  const handleLtoH = () =>{
    const sort = apiData.sort((a,b) => a.price - b.price)
    setSorted(sort)

  } 

  const handleHtoL = () =>{
    const sort = apiData.sort((a,b) => b.price - a.price)
    // console.log(sorted);
    
    setSorted(sort)

  } 



  

  return (
    <div id='container'>
      <button onClick={() => handleLtoH()}>low to high</button>
      <button onClick={() => handleHtoL()}>High to low</button>
           
      <input type='text' name='search'   onChange={(e)=>setSearch(e.target.value)}/> 
       <button onClick={handleSearch}>Search</button> 
       
      {/* {apiData.map((res) =>{
        return <div id='products'>
                  <h1>{res.title}</h1>
                  <img src={res.images[0]} alt="" />
                  <h2>{res.name}</h2>
                  <h3>{res.price}</h3>
              </div>
      })} */}

      {
        filterData.map((res) =>{
          return <div id='products'>
                  <h1>{res.title}</h1>
                  <img src={res.images[0]} alt="" />
                  <h2>{res.name}</h2>
                  <h3>{res.price}</h3>
              </div>
        })
      }

      
   
    </div>
  )
}

export default App