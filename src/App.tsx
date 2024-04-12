import {SetStateAction, useState} from "react";

function App() {

    const [inputText, setInputText] = useState("")
    const [outputText, setOutputText] = useState("")

    const handleClick = () => {
        setOutputText(inputText);
        setInputText("");
    }

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputText(e.target.value);
    }


    return (
        <>
            <input value={inputText} onChange={handleInputChange}/>
            <p>{outputText}</p>
            <button onClick={handleClick}>Increase</button>
        </>
    )
}

export default App
