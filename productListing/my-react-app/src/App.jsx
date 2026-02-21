import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
   

  let [apiData, SetData] = useState([]);
  const [filterData , setFilteredData] = useState([]);
  const [search , setSearch] = useState("");
  // const [sorted , setSorted] = useState("")
  const [sortType, setSortType] = useState("");
 
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
  const handleSort = (type) => {
    setSortType(type);

    let sorted = [...filterData];

    if (type === "lowToHigh") 
      {
       sorted.sort((a, b) => a.price - b.price);
      } 
       else if (type === "highToLow")
      {
       sorted.sort((a, b) => b.price - a.price);
      } 
       else if (type === "rating") 
      {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredData(sorted);
  };




  

  return (
    <div className='container'>
      <h1 className='heading'>Product List</h1>
      {/* <button onClick={() => handleLtoH()}>low to high</button>
      <button onClick={() => handleHtoL()}>High to low</button> */}
           
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

      <div className="sort">
        <label>Sort By: </label>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="">Select</option>
          <option value="lowToHigh" >Price: Low to High</option>
          <option value="highToLow"  >Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
        
      </div>

      {/* {
        filterData.map((res) =>{
          return <div id='products'>
                  <h1>{res.title}</h1>
                  <img src={res.images[0]} alt="" />
                  <h2>{res.name}</h2>
                  <h3>{res.price}</h3>
              </div>
        })
      } */}

      <div className="product-grid">
        {filterData.map((res) => (
          <div className="card" key={res.id}>
            <h2>{res.title}</h2>

            <img
              src={res.images[0]}
              alt={res.title}
              className="image"
            />

            <p>$ {res.price}</p>
            <p>{res.rating}</p>
            <button className='ATC'>Add to cart</button>
          </div>
        ))}
      </div>

      
   
    </div>
  )
}

export default App