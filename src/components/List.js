
import { useState, useEffect,useRef } from "react";
export default function List(){
     const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const saraksts1 = useRef();
      const saraksts2 = useRef();

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/albums')
        .then((resp)=>{
            return resp.json()
        })
        .then((data)=>{
            setData(data)
             setLoading(false);

             
        })
    },[]);


        if (loading) {
            return <p>Notiek ielāde...</p>;
        }

       return(
        <>
            <h1 ref={saraksts1}>Saraksts</h1>
            <button onClick={()=>{
                saraksts1.current.innerHTML = "test";
                saraksts2.current.innerHTML = "test";
            }} ref={saraksts2}>Poga</button>
        <ul>
            {data.map((item,i)=>{
                return (<li key={i}>{item.title}</li>)
            })}
        </ul>
       </>
       )
}