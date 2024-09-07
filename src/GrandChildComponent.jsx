import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

// eslint-disable-next-line react/prop-types
function GrandChildComponent() {
    const {count, increment, decrement} = useContext(CounterContext);
    return (
        <div className='grandchild-comp'>
            <h2>GrandChildComponent</h2>
            <h4>
                Count : {count}
            </h4>
            <button onClick={() => increment()}>Increment</button>
            <br/>
            <br/>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default GrandChildComponent