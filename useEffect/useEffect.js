import { useEffect, useState } from "react";
import { ReactDOM } from "react";

export default function App() {
    /**
     * 
     * useEffect는 componentDidmount, componentWillUnmount, componentWillUpdate의 기능을 한다.
     * 
     */


  const sayHello = () => console.log("hello");
  // useEffect(() => {   //mount될때 실행됨.(componentDidmount, componentWillUpdate의 역할)
  //   sayHello();
  // });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]); //컴포넌트가 만운트될때 함수실행, number가 업데이트될때 함수 실행 ->다른 컴포넌트(like aNumber)가 업데이트될 때는 실행되지 않음


  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
