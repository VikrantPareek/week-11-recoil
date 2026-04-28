import { atom, RecoilRoot, selector, useRecoilValue, useSetRecoilState } from "recoil";

let counterAtom = atom({
  key: "counter",
  default: 0
})

let counterSelector = selector({
  key: "selector",
  get: ({get})=>{
    let atom = get(counterAtom);
    let isEven = (atom % 2 == 0);
    return isEven;
  }
})

function App(){
  return <RecoilRoot>
    <Counter/>
  </RecoilRoot>
}

function Counter(){
  return <div>
    <ShowCount/>
    <Increase/>
    <Decrease/>
    <Even/>
  </div>
}

function ShowCount(){
  let count = useRecoilValue(counterAtom);

  return <h1>{count}</h1>
}

function Increase(){
  let setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(c=>c+2)
  }

  return <button onClick={increase}>Increase</button>
}

function Decrease(){
  let setCount = useSetRecoilState(counterAtom);

  function decrease(){
    setCount(c=>c-1)
  }

  return <button onClick={decrease}>Decrease</button>
}

function Even(){
  let isEven = useRecoilValue(counterSelector);

  return <div>
    {isEven ? "Even" : "Odd"}
  </div>
}

export default App;








// import { memo, useEffect, useState } from "react";

// function App(){
//   return <Counter/>
// }

// function Counter(){
//   let [count, setCount] = useState(0)

//   useEffect(()=>{
//     setInterval(()=>{
//       setCount(c => c + 1)
//     }, 3000)
//   }, [])

//   return <div>
//     <h1>Count is {count}</h1>
//     <FirstChild/>
//     <SecondChild/>
//     <ThirdChild/>
//   </div>
// }

// let FirstChild = memo(function (){
//   return <div>
//     This is the First Child Component
//   </div>
// })

// let SecondChild = memo(function (){
//   return <div>
//     This is the Second Child Component
//   </div>
// })

// let ThirdChild = memo(function (){
//   return <div>
//     This is the Third Child Component
//   </div>
// })

// export default App;









// import { useState } from "react";
// import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// let counterAtom = atom({
//   key: "counter",
//   default: 0,
// });

// function App() {
//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   );
// }

// function Counter() {
//   return (
//     <div>
//       <Increase />
//       <Decrease />
//       <ShowCount />
//     </div>
//   );
// }

// function Increase() {
//   let setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount((c) => c + 1);
//   }

//   return <button onClick={increase}>Increase Count</button>;
// }

// function Decrease() {
//   let setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount((c) => c - 1);
//   }

//   return <button onClick={decrease}>Decrease Count</button>;
// }

// function ShowCount() {
//   let count = useRecoilValue(counterAtom);

//   return <h1>{count}</h1>;
// }

// export default App;








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
