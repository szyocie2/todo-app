import './App.css'
import {Counter} from "./Counter.tsx";
import {Button} from "./Button.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const setValue=()=>{
        setCounter(counter + 1);
    }

    return (
        <>
            <Counter value={counter}></Counter>
            <Button onClick={setValue}></Button>
        </>
    )
}

export default App
