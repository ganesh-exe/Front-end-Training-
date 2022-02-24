const Delete=()=>{
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((result)=>result.json())
      .then((info)=>setdata(info))
},[]);

const deleteItem=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"DELETE"
    })
};

return(
    <div>
        { data.map((El)=>{
            return(
                <>
                <h2>{El.name}</h2>
                <button onClick={deleteItem}>Delete</button>
                </>
            )
        })}
    </div>
)

}