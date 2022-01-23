import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <View style = {styles.header}>
            <Image 
            style = {{alignItems:"center", justifyContent:"center"}}
            size = {100}
            source = {require("../../assets/730_generated.png")}/>
            </View>
            
            <View style = {styles.footer}>
            <Text style = {styles.title}>Enjoy Shopping! Enjoy Swiping!</Text>

            <View style = {styles.button} >
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style = {styles.text}>Register</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style = {styles.text}>Login</Text>
            </TouchableOpacity>
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: "#33FFB7",
    },
    header: {
        flex:2, 
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
    },
    footer: {
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    title: {
        fontSize:30,
        color:"#0d21d4",
        fontFamily:"Baskerville-Bold",
        marginBottom:20
    },
    button:{
    backgroundColor:"#03fcf8",
    paddingHorizontal:3,
    paddingVertical:5,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:10

    
    },
    text:{
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"Baskerville-Bold"
    },
})
