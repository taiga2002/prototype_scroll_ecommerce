import React, { Component } from 'react'
import { View, Button, TextInput, StyleSheet, Image, Text } from 'react-native'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'


export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <View style = {styles.container}>

            <View style = {{alignItems:"center", marginBottom:20, }}>
            <Image 
            style = {{height:300, width:300}}
            size = {100}
            source = {require("../../assets/login.png")}/>
            </View>

            <TextInput 
                placeholderTextColor = "#444"
                autoCapitalize = "none"
                style = {styles.input}
                placeholder="name"
                onChangeText={(name) => this.setState({ name })}
            />
            <TextInput
                placeholderTextColor = "#444"
                autoCapitalize = "none"
                style = {styles.input}
                placeholder="email"
                onChangeText={(email) => this.setState({ email })}
            />
            <TextInput
                placeholderTextColor = "#444"
                autoCapitalize = "none"
                style = {styles.input}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
            />
            <View style = {[styles.button]}>
            <TouchableOpacity onPress={() => this.onSignUp()}>
                <Text style = {{color:"#fff"}}>"Sign Up"</Text>
            </TouchableOpacity>
            </View>

            </View>
        

        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#b4fae8",
        flex:1
    },
    input:{
        
        borderRadius:4,
        padding:12,
        backgroundColor:"#FAFAFA",
        marginBottom:10,
        borderWidth:1,
    },
    button:{
        alignSelf:"center",
        backgroundColor:"#3711f2",
        paddingHorizontal:3,
        paddingVertical:5,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:10,
        width:100,
        alignItems:"center"
        }
})
export default Register
