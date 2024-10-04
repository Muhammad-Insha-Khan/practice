import React, {useState} from 'react'

export const Counter = () =>  {
    let [counter,setstate] = useState(0);
    
    const increament = () => {
        setstate(counter + 1);
        // alert(counter, "is zeo");
    }

    const clear = () => {
        setstate(counter === 0);
        alert('counter reset');
    }
  return (
    <div>
        <h1>Counter {counter}</h1>
        <button onClick={increament}>increament </button>
        <button onClick={clear}>clear </button>
        </div>
)
}
