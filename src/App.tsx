import {SetStateAction, useState} from "react";

function App() {

    const [inputText, setInputText] = useState("")
    const [toDoArray, setToDoArray] = useState<string[]>([]);
    const handleClick = () => {
        if (inputText !== "") {
            setToDoArray(toDoArray => [...toDoArray, inputText]);
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
        const filteredArray = toDoArray.filter(item => item !== itemToDelete);
        setToDoArray(filteredArray)
    }


    return (
        <div className="container">
            <div className="header">
                <input value={inputText} onChange={handleInputChange}/>
                <button onClick={handleClick} className="btn2">Add</button>
                <button onClick={handleClear} className="btn">Clear</button>
            </div>
            <div className="box">
                {toDoArray.map((item, index) => (
                    <div key={index} className="list-item">
                        <h2>{item}</h2>
                        <button onClick={() => itemDeleteHandler(item)} className="delete-button">X</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default App
