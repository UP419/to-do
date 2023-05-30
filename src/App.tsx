import './App.css'
import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDoList, setToDoList] = useState<string[]>([])
    const handleClick = () => {
        toDoList.push(toDo)
        setToDoList(toDoList)
        setToDo("")
        console.log(toDoList)
    }
    return (
    <>
        <input
            placeholder={"Username"}
            type="text"
            id="username"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            required={true}
        />
        <button type="submit" onClick={handleClick}>Login</button>
        {toDoList.map((item, index)=>(
            <h2 key={index}>{item}</h2>
            ))}
    </>
  )
}

export default App
