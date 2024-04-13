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
        <>
            <div>
                <input value={inputText} onChange={handleInputChange}/>
                <button onClick={handleClick}>Add</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div>
                <ul>
                    {toDoArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default App
