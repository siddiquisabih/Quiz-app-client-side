import Action from "../Actions/action"
import axios from "axios"

class Midware {

    //yai fb k bad hoga

    // static studentFormSubmit(){
    // return (dispatch)=>{
    // axios.post()
    // }}

    static getAllPrograms() {
        let allProgram = []
        return (dispatch) => {
            axios.get('https://saylaniquiz.herokuapp.com/api/getAllPrograms')
                .then((responce) => {
                    allProgram = responce.data
                    console.log(responce.data, "all courses")
                })
                .then(() => {
                    dispatch(Action.getProgram(allProgram))
                })
        }
    }


    static getAllBactches() {
        getBatches = []
        return (dispatch) => {
            axios.get('https://saylaniquiz.herokuapp.com/api/getAllBatches')
                .then((responce) => {
                    getBatches = responce.data
                    console.log('all program', responce.data)
                })
                .then(() => {
                    dispatch(Action.getBatches(getBatches))
                })
        }
    }

    static getSpecificBatches(proID) {
        return (dispatch) => {
            console.log(proID, "proID")
            var batchesArray = []
            var config = {
                headers: { program_id: proID }
            }
            axios.get('https://saylaniquiz.herokuapp.com/api/getSpecificBatches', config)
                .then((responce) => {
                    responce.data.map((obj) => {
                        batchesArray.push(obj)
                    })
                    console.log(batchesArray, 'all Specific Batches')
                })
                .then(() => {
                    dispatch(Action.getSpecificBatches(batchesArray)) //yahan pay Specific Batches ko ly k ana hai
                })
        }
    }

    static getSpecificCourses(batID) {
        return (dispatch) => {
            var courses = [];
            var config = {
                headers: { batch_id: batID }
            }
            axios.get('https://saylaniquiz.herokuapp.com/api/getSpecificCoureses', config)
                .then((responce) => {

                    responce.data.map((obj)=>{
                        courses.push(obj)
                    })

                    console.log(courses, "Specific courses")
                })

                .then(()=>{
                    dispatch(Action.getParticularCourse(courses))
                })


        }
    }



}
export default Midware