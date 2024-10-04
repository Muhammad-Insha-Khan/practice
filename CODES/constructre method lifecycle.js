
import React, { Component } from 'react'

class App extends Component {
   constructor(){
    super();
  console.log("constructor method lifecycle")
      
   }
  render(){
    console.log("constructor method lifecycle")
  return (
    <div> LIFE CYCLE CONSTRUCTOR   </div>
  )
}
}
export default App

/* note: outpt console me 2 baar arah hai tau ye 
  <React.StrictMode> index.js se jaakr hatado
