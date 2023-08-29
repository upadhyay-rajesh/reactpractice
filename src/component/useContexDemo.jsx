import {useContext,useState,createContext} from "react";


const empContext=createContext();

export default function Component1(){
    const [name, setName]=useState("David");

    return(
    <empContext.Provider value={name}>
        <MyComponent />
    </empContext.Provider>)
}

function MyComponent(){
    const empInformation=useContext(empContext);

    return(
        <div>
            <h1>{empInformation}</h1>
        </div>
    )
}
    