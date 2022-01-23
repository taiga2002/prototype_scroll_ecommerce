import React, { Component } from 'react'
import { View, Button, TextInput, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase'


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
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
                source = {require("../../assets/signup.png")}/>
                </View>
    
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
                    onChangeText={(email) => this.setState({ password })}
                />
                
                <View style = {[styles.button]}>
                <TouchableOpacity onPress={() => this.onSignUp()}>
                    <Text style = {{color:"#fff"}}>"Sign In"</Text>
                </TouchableOpacity>
                </View>
    
                </View>
            
    
            )
        }
    }
    const styles = StyleSheet.create({
        container:{
            backgroundColor:"grey",
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
export default Login
