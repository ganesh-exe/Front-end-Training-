import './App.css';
import React, {useState} from 'react';
import Contact from './components/Contact';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [contacts, setContacts] = useState([
    {Name:"Arjun reddy",Email:"jackdaniels549@gmail.com"},
    {Name:"Gabbar Singh",Email:"ihave2handslol@gmail.com"},
    {Name:"Bajirao Singham",Email:"bolosubaankesari@gmail.com"},

  ])
  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  

  const addalert=()=>{
    alert("Task added successfully")
  }
  const delalert=()=>{
    alert("Task deleted successfully")
  }
  const editalert=()=>{
    alert("Task updated successfully")
  }
 
  
  
  
  const addContact=()=>{
    setContacts([...contacts,{Name:name,Email:email}])
    setName("")
    setEmail("")
    setTimeout(addalert,500)
  }
 
  const deleteContact=(nameRef)=>{
    const contactList=contacts.filter(item=>item.Name!==nameRef)
    setContacts(contactList);
    setTimeout(delalert,500)
  }
  
  const editContact=(nameRef)=>{
    const contactList=[...contacts]
    const index=contacts.findIndex(ele=>ele.Name==nameRef)
    contactList[index]={Name:name,Email:email}
    setContacts(contactList)
    setName("")
    setEmail("")
    setTimeout(editalert,500)
  }
 
  console.log(contacts)
  return (
    <div className="main"> <strong style={{fontStyle:'italic'}}>Contact book</strong>
      <div className="App">
      <form>
        <input type="text" className="form-control mt-1" placeholder="Enter name" onChange={handleName} value={name}></input>
        <input type="email" className="form-control mt-1" placeholder="Enter email" onChange={handleEmail} value={email}></input>
        <button type="button" className="btn btn-primary mt-2 mb-1" onClick={addContact}>Add task</button>
     </form>
     <Contact contacts={contacts} deleteContact={deleteContact} editContact={editContact}/>
      </div>
    </div>
  );
}

export default App;
