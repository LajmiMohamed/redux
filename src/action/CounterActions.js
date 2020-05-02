import {INCREMENT,DECREMENT,CHECKIN} from"./types";
export const increment = (amount) =>{
return{
    type:INCREMENT,
    payload:amount
}
}
export const decrement = (amount) =>{
    return{
        type:DECREMENT,
        payload:amount
    }
 }
 export const checkuser = (user) =>{
    return{
        type:CHECKIN,
        payload:user
    }
 }