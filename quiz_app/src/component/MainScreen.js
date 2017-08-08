import React, { Component } from 'react'
import { Container, Content, Button, Text } from "native-base"
import * as firebase from "firebase"



var config = {
    apiKey: "AIzaSyACL5Ml3iIeZniIH1uEvXyUbwL925sDHYI",
    authDomain: "quiz-app-e6a96.firebaseapp.com",
    databaseURL: "https://quiz-app-e6a96.firebaseio.com",
    projectId: "quiz-app-e6a96",
    storageBucket: "quiz-app-e6a96.appspot.com",
    messagingSenderId: "180409310949"
};
firebase.initializeApp(config);



var provider = new firebase.auth.FacebookAuthProvider();


class MainScreen extends Component {
static navigationOptions={
    title : 'Quiz App'
}


facebookSignin(){
//     console.log('sajgsdjhags')
// firebase.auth().signInWithPopup(provider)
// .then(function (result){
//     var token = result.credential.accessToken;
//     var user = result.user
//     console.log(user , "User" , Token , "Tokken hai")
// })
// .catch(function (error){
//     var errorCode = error.code
//     var errorMessage = error.message
//     console.log(errorCode , errorMessage)
// })


this.props.navigation.navigate('StydentFormRoute')


}


    render() {
        return (
            <Container>

                <Button rounded onPress={this.facebookSignin.bind(this)} >
                    <Text>
                        Facebook Signin
                        </Text>
                </Button>


            </Container>
        ) 
    }
}

export default MainScreen