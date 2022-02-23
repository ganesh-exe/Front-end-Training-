import { useEffect, useState } from "react";
import React from 'react'

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result)=>result.json())
    .then((info)=>setdata(info))
  }, []);
  console.log(data)

    return (
      <div className='App'>
        {data.map((el)=>{
          return(
            <>
            <h2>{el.name}</h2>
            <h3>{el.email}</h3>
            </>
          )
        })}
      </div>
      );
}

export default App