import { StackNavigator } from "react-navigation"

import MainScreen from "../component/MainScreen"
import StudentForm from "../component/StudentForm"
import StudentCourses from "../component/Courses"
import QuizList from "../component/QuizList"

const Route = StackNavigator({




    // Home: {
    //     screen: MainScreen
    // },
    // StydentFormRoute: {
    //     screen: StudentForm
    // },
    CourseRoute : {
        screen : StudentCourses
    },

    QuizLIstRoute :{
        screen : QuizList
    }

})

export default Route