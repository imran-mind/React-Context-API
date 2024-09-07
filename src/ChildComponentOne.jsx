import React from 'react'
import GrandChildComponent from './GrandChildComponent'

// eslint-disable-next-line react/prop-types
function ChildComponentOne() {
    return (
        <div className='child-comp'>
            <h2>ChildComponentOne</h2>
            {/* we are not using this states and inc and dec */}
            <GrandChildComponent/>
        </div>
    )
}

export default ChildComponentOne