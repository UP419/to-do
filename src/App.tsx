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


    return (
        <div className="container">
            <div className="header">
                <input value={inputText} onChange={handleInputChange}/>
                <button onClick={handleClick} className="btn2">Add</button>
                <button onClick={handleClear} className="btn">Clear</button>
            </div>
            <div className="box">
                    <div className="list">
                        <ul>
                            {toDoArray.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                            }
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default App
