class Action {

    static submit = "formSubmit"
    static program = "program"
    static batches = "batches"
    static specificBatches = "specificBatches"
    static specificCourse = "specificCourse"

    static submitForm() {
        return {
            type: Action.submit
        }
    }


    static getProgram(value) {
        return {
            type: Action.program,
            data: value
        }
    }


    static getBatches(value) {
        return {
            type: Action.batches,
            data: value
        }
    }



    static getSpecificBatches(value) {
        return {
            type: Action.specificBatches,
            data: value
        }
    }

    static getParticularCourse(value) {
        return {
            type: Action.specificCourse,
            data: value
        }
    }




}
export default Action