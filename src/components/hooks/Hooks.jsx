import React, { useState } from 'react'

const Hooks = () => {
    // let count = 0;
    // function setCount() {
    //     count +=1;
    //     console.log(count);
    // }
    let [count,setCount] = useState(0)
    function addCount(){
        setCount(count += 1);
    }
    function reduceCount(){
        setCount(count -= 1);
    }

  return (
    <div>
        <h2>Hooks</h2>
        <h3>
        Count: {count}
         <button onClick={()=> addCount()}>count++</button>
         <button onClick={()=> reduceCount()}>count--</button>
        </h3>
    </div>
  )
}

export default Hooks;