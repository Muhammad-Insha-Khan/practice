
import React, { Component } from 'react'

class App extends Component {
    
   constructor(){
    super();
    console.log("constructore methdo life cycle");
      
   }
  render(){
    console.log("render life cycle");
  return (
    <>
    <div> LIFE CYCLE CONSTRUCTOR </div>
    </>
  )
}
}
export default App

  
