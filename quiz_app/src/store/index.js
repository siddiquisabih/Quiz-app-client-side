import {createStore , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Reducer from "../store/Reducers/reducer"

let middleware = applyMiddleware(thunk)


const Store = createStore(Reducer , middleware)


Store.subscribe(()=>{
    console.log("Store State",Store.getState())
})


export default Store