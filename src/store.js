import {createStore,applyMiddleware,compose} from "redux"
import rootReducer from "./reducer"
import {CHECKIN }from './action/types'
const myLog=(store)=>(next)=>(action)=>{
    console.log(action)
if(action.type=== CHECKIN){
    let globState=store.getState()
   let user = globState.CounterReducer.users.find(el=>el===action.payload)
   if(user){
       next(action)
   }
}
next(action)

}
export default createStore(rootReducer, compose(applyMiddleware(myLog) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))