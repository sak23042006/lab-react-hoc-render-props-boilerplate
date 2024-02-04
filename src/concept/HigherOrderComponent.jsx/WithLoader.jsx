import React, { useState } from 'react'
import { Audio ,FidgetSpinner} from 'react-loader-spinner'

const WithLoader = (ChildComponent) => {

    
    return(props)=>{

    const [loading, setLoading]=useState(true) 
        
        setTimeout(()=>{
          setLoading(false)
        },3000)

        return(
            <>
            {loading?<FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  />:<ChildComponent{...props}/>}
            </>
        )
    }
}

export default WithLoader