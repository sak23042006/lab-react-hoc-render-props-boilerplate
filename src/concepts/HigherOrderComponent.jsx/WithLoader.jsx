import React, { useState } from 'react'

const WithLoader = (ChildComponent) => {
    return (props) => {
        const [loader, setLoader] = useState(true)

        setTimeout(() => {
            setLoader(false)
        }, 2000)

        return <>
            {loader ? <h1>Loading.....</h1> : <ChildComponent {...props} />}
        </>
    }
}


export default WithLoader