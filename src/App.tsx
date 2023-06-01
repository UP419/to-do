import './App.css'
import {useState, useEffect} from "react";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDoList, setToDoList] = useState<string[]>([])

    useEffect(() => {
        const storedToDoList = localStorage.getItem('toDoList');
        if (storedToDoList) {
            setToDoList(JSON.parse(storedToDoList));
        }
    }, []);

    const handleClick = () => {
        toDoList.push(toDo)
        setToDoList(toDoList)
        setToDo("")
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
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
