import React, { Component } from "react"


import { Container, Content, Button, Text, Form, Item, Input, Label } from "native-base"



class StudentForm extends Component {
    constructor() {
        super()
        this.state = {
            studentId: '',
            studentName: '',
            studentEmail: ''
        }
    }


    static navigationOptions = {
        title: 'Saylani Quiz'
    }

    buttonSubmiit() {

        const studentId = this.state.studentId
        const studentName = this.state.studentName
        const studentEmail = this.state.studentEmail

        if(studentId === '' || studentEmail==='' || studentName === ''){
            alert('fill all items')
        }
        else{

        console.log(studentId, studentEmail, studentId)
        this.props.navigation.navigate('CourseRoute')
        }


    }




    render() {
        return (
            <Container>

                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                onChangeText={studentName => {
                                    this.setState({
                                        studentName
                                    })
                                }
                                }

                                value={this.state.studentName}

                                />
                        </Item>
                        <Item floatingLabel >
                            <Label>Student ID</Label>
                            <Input
                                onChangeText={studentId => {
                                    this.setState({
                                        studentId
                                    })
                                }
                                }

                                value={this.state.studentId}

                                />
                        </Item>
                        <Item floatingLabel >
                            <Label>Your Email</Label>
                            <Input
                                onChangeText={studentEmail => {
                                    this.setState({
                                        studentEmail
                                    })
                                }
                                }

                                value={this.state.studentEmail}

                                />
                        </Item>
                        <Item last style={styles.buttonStyle}>
                            <Button rounded 
                            onPress={this.buttonSubmiit.bind(this)}
                            >
                                <Text>
                                    Submit
                                 </Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default StudentForm

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginTop: 30
    },
}