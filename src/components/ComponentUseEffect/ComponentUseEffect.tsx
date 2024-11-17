import { useEffect, useState } from "react"

const ComponentUseEffect = () => {

    const [state, setState] = useState(false);


    useEffect(()=>{
        console.log("estoy")
    },[])

    useEffect(()=>{
        console.log(state)
    },[state])
  return (
    <div>
        <p>{state ? "Es true" : "Es false"}</p>
      <button onClick={()=>{
        setState(!state)
      }}>
        Cambiar state
      </button>
    </div>
  )
}

export default ComponentUseEffect
