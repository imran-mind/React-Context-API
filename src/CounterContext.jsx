import { createContext, useState } from "react";

const CounterContext = createContext({});
console.log(CounterContext);
// Provider
// Consumer
// eslint-disable-next-line react/prop-types
const CounterProvider = ({children})=>{
    const [count, setCount] = useState(10);
    const increment = ()=>{
        setCount((c)=> c+2);
    }
    const decrement = ()=>{
        setCount((c)=> c-2);
    }
    const stateObject = {
        count,
        increment,
        decrement
    }
    return (
        <CounterContext.Provider value={stateObject}>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext, CounterProvider};

