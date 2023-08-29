import {useState, useEffect} from "react";
export default function StateHooksComponent(props){


   const[employee, setEmployee]= useState({
        name:"Rajesh",
        password:"abcd",
        email:"abc@yahoo.com",
        address:"Bangalore"
    })

    const [name, setName]=useState("Salman");
    const [pass,setPass ]=useState("hello");

    const [counter, setCounter]=useState(2);

    useEffect(()=>{
        setTimeout(()=>{
            setCounter((counter)=>counter+3);
        },2000);
    });

    return (
        <div>
            my name is {employee.name}<br></br>
            password is {pass} <br></br>

            <h1>{counter}</h1> <br></br>

            age is {props.age}<br></br>

            name is {name} <br></br>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>

        </div>
    )
}