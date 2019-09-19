import React from 'react';
import './App.css';

// 요구사항 1. 시간과 분이 변화하는 것을 보고 싶다.
// 요구사항 2. 동적으로 보고싶다.
class WorldClock extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute : 0,
      stop : false,
    }
    console.log("  Child) 시작합니다")
  }

  componentDidMount(){
    // this.setState
    // this.state.minute += 1; -> 절대 불가
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        ?{hour: state.hour + 1, minute :0}
        : {minute: state.minute + 1}
        ))
    }, 5000)
    console.log("  Child) mount 되었습니다.")
  }

  componentDidUpdate(){
    console.log("  Child) update 되었습니다.")
  }

  componentWillUnmount(){
    console.log("  Child) unMount 되었습니다.")
    clearInterval(this.timer);
  }

  //1-2.handling 함수를 만든다
  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer);
  }
  // render 미리 약속되있는 함수
  render(){
    return(
      <div className={"WorldClock"}>
        <h2> 도시 : {this.props.city} </h2>
        <p> 시간 : {this.state.hour}시 {this.state.minute}분</p>
        {/* 1-3. onEvent명을 통해 handling 함수를 부른다. */}
        <button value={true} onClick={this.handlingClick}>멈춰!</button>
      </div>
    )
  }
}


class App extends React.Component  {
  constructor(props){
    super(props)
    //1-1. state를 만든다
    this.cityTimeData= [
      ['서울', 10],
      ['북한', 11],
      ['도쿄', 12],
      ['베이징', 1],
    ]
    //2-1. state를 만든다
    this.state ={
      content: '',
      show: true,
    }
    console.log("Parent() 시작합니다.")
  }

  componentDidMount(){
    console.log("Parent() mount 되었습니다..")
  }

  componentDidUpdate(){
    console.log("Parent() update 되었습니다..")
  }

  //2-2. handling 함수를 만든다
  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClick = (event)=>{
    this.setState((prevState) => ({show: !prevState.show}))
  }

  render() {
  return (
    <div className="App">
      <h1 className = {'myStyle'}>안녕하세요</h1>
      <div className= {'post'}>
        첫 게시글입니다.
        {/* 2-3.onEvent명을 통해 handling 함수를 부른다. */}
        <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
      </div>
      <button onClick={this.handlingClick}>손가락 튕기기</button>
      { this.state.show &&
        this.cityTimeData.map((citytime,index)=>
      <WorldClock city={citytime[0]} time ={citytime[1]} key ={index} />
      )
      }
    </div>
  );
  }
}

//컴포넌트 수출
export default App; // -> index.js

