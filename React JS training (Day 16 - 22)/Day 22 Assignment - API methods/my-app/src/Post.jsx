import React from 'react'

const Post = () => {
    const [data, setdata] = useState([
        {name:"ganesh",
         email:"g@g"
        }
    ]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts',{
          method:"POST",
          body:JSON.stringify(data)
      } )
    
    }, []);
    
    
    
      return (
        <>
        <input type="text" name="" id="" placeholder='name'/>
        <input type="text" name="" id="" placeholder='email'/>
       <button onClick={clickEvent} style={{margin:"50px auto"}}>click</button>
        </>
        )
}

export default Post