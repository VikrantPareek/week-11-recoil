import { createContext, useContext, useState } from "react";

let CountContext = createContext();

function App() {
  let [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      <Counter />
    </CountContext.Provider>
  );
}

function Counter(){
  return <div>
    <Increase/>
    <Decrease/>
    <ShowCount/>
  </div>
}

function Increase(){
  let {count, setCount} = useContext(CountContext)

  function increase(){
    setCount(count + 1)
  }

  return <button onClick={increase}>Increase Count</button>
}

function Decrease(){
  let {count, setCount} = useContext(CountContext)

  function decrease(){
    setCount(count - 1)
  }

  return <button onClick={decrease}>Decrease Count</button>
}

function ShowCount(){
  let {count} = useContext(CountContext)

  return <h1>{count}</h1>
}

export default App;
