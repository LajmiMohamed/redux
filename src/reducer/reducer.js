import {INCREMENT,DECREMENT,CHECKIN} from"../action/types";

let initState={
    counter:0,
    isauth:false,
    users:["mohamed"]
}
const CounterReducer =(state =initState,action)=>{
switch(action.type){
    case INCREMENT : 
    return {...state,counter: state.counter +action.payload}
    case DECREMENT: 
    return {...state,counter: state.counter -action.payload}
    case CHECKIN : 
    return {...state,    isauth:true
    }
    default:
        return state
}
}
export default  CounterReducer