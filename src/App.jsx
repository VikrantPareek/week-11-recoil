import { useState } from "react";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

let counterAtom = atom({
  key: "counter",
  default: 0,
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <Increase />
      <Decrease />
      <ShowCount />
    </div>
  );
}

function Increase() {
  let setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  return <button onClick={increase}>Increase Count</button>;
}

function Decrease() {
  let setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  return <button onClick={decrease}>Decrease Count</button>;
}

function ShowCount() {
  let count = useRecoilValue(counterAtom);

  return <h1>{count}</h1>;
}

export default App;








// import { createContext, useContext, useState } from "react";

// let CountContext = createContext();

// function App() {
//   let [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{count, setCount}}>
//       <Counter />
//     </CountContext.Provider>
//   );
// }

// function Counter(){
//   return <div>
//     <Increase/>
//     <Decrease/>
//     <ShowCount/>
//   </div>
// }

// function Increase(){
//   let {count, setCount} = useContext(CountContext)

//   function increase(){
//     setCount(count + 1)
//   }

//   return <button onClick={increase}>Increase Count</button>
// }

// function Decrease(){
//   let {count, setCount} = useContext(CountContext)

//   function decrease(){
//     setCount(count - 1)
//   }

//   return <button onClick={decrease}>Decrease Count</button>
// }

// function ShowCount(){
//   let {count} = useContext(CountContext)

//   return <h1>{count}</h1>
// }

// export default App;
