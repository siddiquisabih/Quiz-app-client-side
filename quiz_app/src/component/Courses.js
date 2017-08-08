import React, { Component } from "react"
import { Container, Content, Button, Text, Form, Input, Label, Picker, Item as FormItem } from "native-base"
// import axios from "axios"
import Midware from "../store/MiddleWare/midware"
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        programDataList: state.getProgramData,
        specificDataList: state.getSpecificBatches
    }
}

function mapDispatchToProps(dispatch) {
    return {

        getProgramdataList: () => {
            dispatch(Midware.getAllPrograms())
        },

        specificBatches: (program_id) => {
            dispatch(Midware.getSpecificBatches(program_id))
        },

        specificCourses: (batch_id) => {
            dispatch(Midware.getSpecificCourses(batch_id))
        }



    }
}

const Item = Picker.Item;
class StudentCourses extends Component {
    constructor() {
        super()
        this.state = {
            program_id: '',
            batch_id: '',

        }
    }


    componentWillMount() {
        this.props.getProgramdataList()
        // this.props.getBatchesDataList()
    }

    static navigationOptions = {
        title: 'Courses'
    }

    checkSpecificBatches(value) {
        this.setState({
            program_id: value
        })
        console.log(value, "program id")
        this.props.specificBatches(value)
    }

    changeBatchId(value) {
        this.setState({
            batch_id: value
        })
    }


    navigateToQuizList() {
        let batchId = this.state.batch_id
        this.props.specificCourses(batchId)
        this.props.navigation.navigate('QuizLIstRoute')
    }

    render() {
        console.log('specificDataList', this.props.specificDataList)
        return (
            <Container>
                <Picker
                    mode="dropdown"
                    placeholder="Select Program"
                    note={false}
                    selectedValue={this.state.program_id}
                    onValueChange={this.checkSpecificBatches.bind(this)}
                    >
                    <Item
                        label="Program" value="Program" />
                    {
                        this.props.programDataList.map((obj) => {
                            return (
                                <Item
                                    key={obj._id}
                                    label={obj.program} value={obj._id} />
                            )
                        })
                    }
                </Picker>

                <Container>
                    {
                        this.props.specificDataList.map((obj) => {
                            return (
                                <Picker
                                    key={obj._id}
                                    mode="dropdown"
                                    placeholder="Batches"
                                    note={false}
                                    selectedValue={this.state.batch_id}
                                    onValueChange={this.changeBatchId.bind(this)}>
                                    <Item label="Batch" value="1" />
                                    <Item label={obj.batch} value={obj._id} />
                                </Picker>
                            )
                        })
                    }

                </Container>
                <Button full
                    rounded
                    onPress={this.navigateToQuizList.bind(this)}
                    >
                    <Text>
                        SUBMIT
                </Text>
                </Button>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentCourses)