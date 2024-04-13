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


    return (
        <>
            <input value={inputText} onChange={handleInputChange}/>
            <button onClick={handleClick}>Add</button>
            <ul>
                {toDoArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </>
    )
}

export default App
