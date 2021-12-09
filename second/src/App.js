import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const countAdd = () => {
    setCount(count+1);
  }

  const countMin = () => {
    setCount(count-1);
  }

  const NAME="디모";
  return (
    // 반드시 묶어줘야 나온다.
    // <p>
    // <div>안녕하세요 JS는 중괄호 안에 있어야함</div>
    // {NAME}
    // </p>

    // <div>
    //   {
    //     NAME==="디모" ? <h1>디모입니다.</h1> : <h1>디모가 아닙니다.</h1>  
    //   }
    //   {
    //     NAME==="디모" && <h1>디모입니다.</h1>
    //   }
    // </div>
    // <div className="dkdkdk">

    // </div>

    <div>
      {/* <h1>{count}</h1> */}
      <CountView count={count}/>
      <button onClick={countAdd}>증가</button>
      <button onClick={countMin}>감소</button>
    </div>
  );
}

function CountView(props){
  return(
    <div>
      <h1>{props.count}</h1>
    </div>
  )
}
export default App;
