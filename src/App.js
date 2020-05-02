import React,{useState} from 'react';
import './App.css';
import{connect} from "react-redux"
import {increment,decrement,checkuser} from "./action/CounterActions"

function App(props) {

console.log(props)
const [step,setStep]=useState(1)
const [user,setUser]=useState("")

  return (
    <div className="App">
     
      <header className="App-header">
      <div>
      <input type="text" onChange={e=>setUser(e.target.value)}></input>
      <button onClick={()=>props.check(user)}>Login</button>
      </div>
      
      
       <button onClick={()=>props.inc(step) }>+</button>
       {props.counter.counter}
       <button onClick={()=>props.dec(step) }>-</button>
      </header>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    counter:state.CounterReducer
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    inc:(amount)=>dispatch(increment(amount)),
    dec:(x)=>dispatch(decrement(x)),
    check:(user)=>dispatch(checkuser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
