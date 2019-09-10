import React from 'react';
import logo from './logo.svg';
import './App.css';


// 컴포넌트
// const myStyle ={
//   color:'red',
//   fontWeight : 700,
// }

// JSX -> HTML 태그
// JSX -> style을 통해 css (JSX)
// JSX -> className을 통해 css (css -> App.css)

function App() {
  return (
    <div className="App">
      <h1 className = {'myStyle'}>안녕하세요</h1>
    <div className= {'post'}>첫 게시글입니다.</div>
    </div>
  );
}

//컴포넌트 수출
export default App;
