import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

// eslint-disable-next-line react/prop-types
function ChildComponentTwo() {
  const {count} = useContext(CounterContext);
  return (
    <h2 className='child-2-comp'>
        ChildComponentTwo : 
        {count}
    </h2>
  )
}

export default ChildComponentTwo