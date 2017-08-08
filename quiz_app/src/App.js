import React , {Component} from "react"

import Route from "./Router/Navigation"
import * as firebase from "firebase"
import StudentCourses from "./component/Courses"
import {Provider} from "react-redux"
import Store from "./store"

class App extends Component{
render(){
    return(
<Provider store={Store}>
{
// <StudentCourses/>
}


      <Route/>

</Provider>
    )
}

}
export default App
