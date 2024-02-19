// import React from 'react'
import Greets from './Greets'
// import Welcome from './Welcome'
import { useState } from "react"
 function App(){
const [name,Setname]=useState(true)


  return (
   
  <div>
  <Greets name={name}/>

{ name ? <h1>ok react</h1>
: false} 
  {/*   */}
  <button onClick={()=>Setname(!name)}>show</button>
  </div>
  
  )

}
export default App