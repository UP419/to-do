import './App.css'
import React, {useState, useEffect} from "react";

function App() {
    const [toDo, setToDo] = useState("")
    const [toDoList, setToDoList] = useState<string[]>([])
    const [duplicatedListMember, setDuplicatedListMember] = useState(false)

    useEffect(() => {
        const storedToDoList = localStorage.getItem('toDoList');
        if (storedToDoList) {
            setToDoList(JSON.parse(storedToDoList));
        }
    }, []);

    const handleClick = () => {
        if(toDo !== "") {
            if(toDoList.includes(toDo)){
                setDuplicatedListMember(true)
            }else {
                toDoList.push(toDo)
                setToDoList(toDoList)
                localStorage.setItem('toDoList', JSON.stringify(toDoList))
                setDuplicatedListMember(false)
            }
            setToDo("")
        }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleClick();
        }
    }
    return (
    <>
        <input
            placeholder={"Username"}
            type="text"
            id="username"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            onKeyDown={handleKeyDown}
            required={true}
        />
        <button type="submit" onClick={handleClick}>Login</button>
        {toDoList.map((item, index)=>(
            <h2 key={index}>{item}</h2>
            ))}
        {duplicatedListMember &&
        <h2>List already contains</h2>}
    </>
  )
}

export default App
