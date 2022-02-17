import './App.css';
import React,{useState} from 'react';
function App() {
  const [info, setinfo] = useState("")
  const [infoTwo, setinfoTwo] = useState("");
  const [infoThree, setinfoThree] = useState("");
  const [infoFour, setinfoFour] = useState("");

  const handleChange=(e)=>{
    setinfo(e.target.value)
  }

  const handleChange2=(e)=>{
    setinfoTwo(e.target.value)
  }

  const handleChange3=(e)=>{
    setinfoThree(e.target.value)
  }

  const handleChange4=(e)=>{
    setinfoFour(e.target.value)
  }

  const handleClick=(e)=>{
    e.preventDefault();
    console.log(info,infoTwo,infoThree,infoFour)
  }
  return (
    <div className="App">
     <form>
       <input type="text" placeholder="Enter first name" onChange={handleChange} value={info}></input>
       <input type="text" placeholder="Enter last name" onChange={handleChange2} value={infoTwo}></input>
       <input type="text" placeholder="Enter age" onChange={handleChange3} value={infoThree}></input>
       <input type="email" placeholder="Enter email" onChange={handleChange4} value={infoFour}></input><br></br>
       <button onClick={handleClick}>Submit</button>
     </form>
    </div>
  );
}

export default App;
/*
const [infoTwo, setinfoTwo] = useState("");
  const [infoThree, setinfoThree] = useState("");
  const [infoFour, setinfoFour] = useState("");

  const handleChange=(e)=>{
    setinfo(e.target.value)
  }

  const handleChange2=(e)=>{
    setinfoTwo(e.target.value)
  }

  const handleChange3=(e)=>{
    setinfoThree(e.target.value)
  }

  const handleChange4=(e)=>{
    setinfoFour(e.target.value)
  }

*/