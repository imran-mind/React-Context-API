import { useContext, useState } from 'react'
import ChildComponentTwo from './ChildComponentTwo';
import ChildComponentOne from './ChildComponentOne';
import { CounterContext } from './CounterContext';

function ParentComponent() {
    const {count} = useContext(CounterContext);

    return (
        <div className='parent-comp'>
            <h2>ParentComponent</h2>
            <h4>Count : {count}</h4>
            
            <ChildComponentOne/>

            <ChildComponentTwo/>
        </div>
    )
}

export default ParentComponent