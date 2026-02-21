import './App.css'
// import React, {useState} from 'react'

// const Home = () => {
//     // let [count,SetCount] = useState(0)
//     let data = new Date().toLocaleTimeString()

//     let [count,SetCount] = useState()
//     setInterval(()=>{
//         SetCount(new Date().toLocaleTimeString())
//     })
//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={()=>SetCount(count+1)}>++</button>
//         <button onClick={()=>SetCount(count-1)}>--</button>
//         <button onClick={()=>SetCount(0)}>reset</button>
//     </div>
//   )
// }

// export default Home

// 24 Sep

// import React, { use, useEffect , useState } from 'react'

// const Home = () => {

//   // let [count,SetCount] = useState(0)

//   // let [city,SetCity] = useState('DELHI')

//   // useEffect(()=>{
//   //   console.log("hello");
    
//   // },[count])

//   // fetch("https://jsonplaceholder.typicode.com/todos").
//   // then((res)=>{
//   //   return res.json()
//   // })

//   let [ApiData,SetApiData]= useState([])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos').
//     then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data);
//       SetApiData(data)
//     })

//   },[])

//   return (
//     // <div>
//     //   <h2>{count}</h2>
//     //   <button onClick={()=>SetCount(count+1)}>Click</button>
//     //   <h3>{city}</h3>
//     //   <button onClick={()=>SetCity("bhopal")}>Change</button>
//     // </div>

//     <div>
//       {
//         ApiData.map((a)=>{
//           return(<>
//           <p id="num">{a.id}</p>
//           <h2>{a.title}</h2>
//           </>)
//         })
//       }
//     </div>
//   )
// }

// export default Home

// 25 Sep

import React , {useEffect , useState} from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Home = ({cart,SetCart,  apiData,SetData,filteredData,SetFilteredData}) => {

  let arr=[1,2,3,4,5]
      let arr1=[6,7,8,...arr]
      console.log(arr1,"rrrr");
      

  let [apiData,SetData] = useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
      
    })
  })


  function deletee(id){

    let newArr = apiData.filter((a,b)=>{
      return b!==id
    })
    SetData(newArr)

  }

  return (
    // <div>
    //   {
    //     apiData.map((a)=>{
    //       return(<>
    //       <div id='card'>
    //         <img src={a.image} />
    //         <p>{a.name}</p>
    //         <button onClick={()=>deletee(index)}>del</button>
            
    //       </div>
    //       </>)
    //     })
    //   }

    // </div>
    
    <>
     <Link  to={'/cart'}>  
       <button>add to Cart {cart.length}</button>
      </Link>
    <div>
     
      <button onClick={fun1}>acs</button>
      <button onClick={fun2}>des</button>
      <button onClick={()=>lunch("Lunch")}>lunch</button>
      <button onClick={()=>dinner("Dinner")}>dinner</button>
      <button>breakfast</button>


      {
        filteredddData.map((a,index)=>{
          return(<>
          <div id='card'>
          <img  src={a.image}/>
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
         <button  onClick={()=> SetCart([...cart,a])}>add </button>
           
          </div>
          </>)
        })
      }
    </div>
    </>
  )
}

export default Home