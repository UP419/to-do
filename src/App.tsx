import {SetStateAction, useState} from "react";

function App() {
    interface toDoItem {
        item: string;
        id: number;
        isDone: boolean;
    }

    const [inputText, setInputText] = useState("")
    const [toDoArray, setToDoArray] = useState<toDoItem[]>([]);
    const [itemNum, setItemNum] = useState(0)
    const handleClick = () => {

        const newItem: ToDoItem = {
            item: inputText,
            id: itemNum,
            isDone: false
        };
        if (inputText !== "") {
            setToDoArray(toDoArray => [...toDoArray, newItem]);
            setItemNum(itemNum + 1);
        }
        setInputText("");
        console.log(toDoArray)
    }

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputText(e.target.value);
    }

    const handleClear = () => {
        setToDoArray([]);
    }

    const itemDeleteHandler = (itemToDelete) => {
        const filteredArray = toDoArray.filter(item => item.id !== itemToDelete);
        setToDoArray(filteredArray)
    }

    const handleCheckBoxChange = (item) => {
        const updatedToDoArray = toDoArray.map(todo =>
            todo.id === item.id ? {...todo, isDone: !todo.isDone} : todo
        );
        setToDoArray(updatedToDoArray);
    }


    const handleDoneItems = () => {
        const filteredArray = toDoArray.filter(item => !item.isDone);
        setToDoArray(filteredArray);
    }


    return (
        <div className="container">
            <div className="header">
                <input value={inputText} onChange={handleInputChange}/>
                <button onClick={handleClick} className="btn2">Add</button>
                <button onClick={handleClear} className="btn">Clear</button>
                <button onClick={handleDoneItems}>Remove Done Tasks</button>
            </div>
            <div className="box">
                {toDoArray.map((item) => (
                    <div key={item.id} className="list-item">
                        {item.isDone && <h2 className="line-through">{item.item}</h2>}
                        {!item.isDone && <h2>{item.item}</h2>}
                        <button onClick={() => itemDeleteHandler(item.id)} className="delete-button">X</button>
                        <input type="checkbox" onChange={() => handleCheckBoxChange(item)}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default App
