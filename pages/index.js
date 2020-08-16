import React, {useState} from 'react';


const InputElement = () => {

    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([])
    
    return (
        <>
        <input
            onChange={(e) => {
                setInputText(e.target.value)
                setHistoryList([...historyList, e.target.value])
            }}
            placeholder="Enter any text"
        />
         <p>Current Value : {inputText}</p>
         <h5>History</h5>
         {historyList.map((text) => <p>{text}</p>)}
        </>
    )
}

export default InputElement 
