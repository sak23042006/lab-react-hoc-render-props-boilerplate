import React, { useState } from 'react'

const Render = (props) => {
    let [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <>
            {props.render(increase, count)}
        </>
    )
}

export default Render