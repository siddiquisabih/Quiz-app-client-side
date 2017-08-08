import Action from "../Actions/action"

const initialState = {
    submitForm: false,
    getProgram: false,
    getProgramData: [],
    getBatches: false,
    getBatchesData: [],
    specificBatches: false,
    getSpecificBatches: [],
    specificCourse: false,
    getSpecificCourse: []
}



function Reducer(state = initialState, action) {
    switch (action.type) {


        case Action.submit:
            return Object.assign({}, state, { submitForm: true })

        case Action.program:
            return Object.assign({}, state, { getProgram: true, getProgramData: action.data })



        case Action.batches:
            return Object.assign({}, state, { getBatches: true, getBatchesData: action.data })


        case Action.specificBatches:
            return Object.assign({}, state, { specificBatches: true, getSpecificBatches: action.data })


        case Action.specificCourse:
            return Object.assign({}, state, { specificCourse: true, getSpecificCourse: action.data })


        default:
            return state


    }




}


export default Reducer