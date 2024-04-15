import {SetStateAction, useEffect, useState} from "react";

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
            setToDoArray(prevToDoArray => {
                const updatedToDoArray = [...prevToDoArray, newItem];
                localStorage.setItem("toDoArray", JSON.stringify(updatedToDoArray)); // Update localStorage
                console.log(localStorage); // Log localStorage after update
                return updatedToDoArray; // Return the updated state
            });

            setItemNum(prevItemNum => {
                const updatedItemNum = prevItemNum + 1;
                localStorage.setItem("itemNum", JSON.stringify(updatedItemNum)); // Update localStorage
                return updatedItemNum; // Return the updated state
            });
        }
        setInputText("");
        console.log(toDoArray)
    }

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    }

    const handleClear = () => {
        setToDoArray([]);
        setItemNum(0);
        localStorage.setItem("toDoArray", JSON.stringify([]));
        localStorage.setItem("itemNum", JSON.stringify(0));
    }

    const itemDeleteHandler = (itemToDelete) => {
        setToDoArray(prevToDoArray => {
            const updatedToDoArray = prevToDoArray.filter(item => item.id !== itemToDelete);
            localStorage.setItem("toDoArray", JSON.stringify(updatedToDoArray));
            return updatedToDoArray;
        });
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

    useEffect(() => {
            console.log("afterRefresh");
            console.log(localStorage);
            const storedArray = localStorage.getItem("toDoArray");
            const storedItemNum = localStorage.getItem("itemNum");
            const arr = JSON.parse(storedArray);
            const itemNum = JSON.parse(storedItemNum);
            if (arr) {
                setToDoArray(arr);
            }
            if (itemNum) {
                setItemNum(itemNum);
            }
        }, []
    )


    return (
        <div className="container">
            <div className="header">
                <h1>To Do</h1>
                <input value={inputText} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                <button onClick={handleClick} className="btn2">+ Add task</button>
                <button onClick={handleClear} className="btn">Clear</button>
                <button onClick={handleDoneItems} className="btn">Remove Done Tasks</button>
            </div>
            <div className="box">
                {toDoArray.map((item) => (
                    <div key={item.id} className="list-item">
                        <h2 className={item.isDone ? "line-through" : ""}>{item.item}</h2>
                        <input type="checkbox" onChange={() => handleCheckBoxChange(item)} className="checkbox"/>
                        <button onClick={() => itemDeleteHandler(item.id)} className="delete-button">X</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default App
