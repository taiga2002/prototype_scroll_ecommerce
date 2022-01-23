import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from "react-native-deck-swiper"
import { dummy } from '../../data/dummy';
import tw from 'tailwind-rn'
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { users } from '../../data/users'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av'

export default function Feed() {
    return (
        <SafeAreaView style = {tw("flex-1 bg-gray-200")}>
        <View style = {tw("flex-1 -mt-6")}>
            <Swiper 
                containerStyle={{backgroundColor:"transparent", }}
                cards = {dummy}
                stackSize = {5}
                cardIndex={0}
                animateCardOpacity
                verticalSwipe = {false}
                onSwipedLeft ={()=>{
                    console.log("Swipe PASS")
                }}
                onSwipedRight={()=>{
                    console.log("Swipe YES")
                }}
                overlayLabels ={{
                    left:{
                        title: "NOPE",
                        style:{
                            label:{
                                textAlign:"right",
                                color:"red"
                            }
                        }
                    },
                    right:{
                        title: "LIKE",
                        style:{
                            label:{
                                textAlign:"left",
                                color:"#4DED30"
                            }
                        }
                    },
                }}
                renderCard = {(card) => {
                    return(
                    
                    <View key = {card.id} style = {tw("relative bg-white h-3/4 rounded-xl")}>
                        
                        <Image 
                        style = {tw("absolute top-0 h-full w-full rounded-xl")} 
                        source = {{uri:card.photoURL}}/>
                        {/* <Video
                        source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
                        style={{ width: 300, height: 300 }}
                        /> */}
                        {/* <Video
                        
                        style={styles.video}
                        source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    /> */}
                        <View 
                        style = {[tw("absolute bottom-0 bg-white w-full h-20 justify-between items-between px-6 py-2 rounded-b-xl"), styles.cardShadow,]}>
                            <View>
                                <Text style = {tw("text-2xl font-bold")}>{card.shopName}</Text>
                                <Text>{card.description}</Text>
                                <Text>#{card.hashtag[0]}</Text>
                            </View>
                        </View>

                    <View style = {styles.uicontainer}> 
                        <View style = {styles.rightContainer}>
                                    <Image source = {{uri: users[0].image}} style = {styles.story}/>
                                    <View style = {styles.cardShadow}>
                                        <AntDesign name="message1" size={30} color="white" />
                                        <Text style = {tw("text-white text-center")}>{card.messageNum}</Text>
                                    </View>
                                    <View style = {styles.cardShadow}><MaterialCommunityIcons name="share" size={28} color="white" /></View>
                        </View>
                    </View>
                    

                    </View>
                    )}}
            />
        </View> 
        <View style = {tw("flex flex-row justify-evenly mb-10")}>
            
            <TouchableOpacity style = {tw("items-center justify-center rounded-full w-16 h-16 bg-red-200")}> 
            <SimpleLineIcons name="dislike" size={24} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style = {tw("items-center justify-center rounded-full w-16 h-16 bg-gray-300")}>
            <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style = {tw("items-center justify-center rounded-full w-16 h-16 bg-green-200")}>
            <SimpleLineIcons name="like" size={24} color="white" />
           
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardShadow:{
        shadowColor:"#000",
        shadowOffset:
        {
            width:0,
            height:1,
    },
        shadowOpacity:0.2,
        shadowRadius:1.41,
        elevation:2,
},
story: {
    width:50,
    height:50,
    borderRadius:50,
    borderWidth:3,
    borderColor:"white"
},
button:{
    marginHorizontal:10
},
rightContainer:{
    alignSelf:"flex-end",
    height:160,
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:130
},
uicontainer:{
    height:"100%",
    justifyContent:"flex-end"
}
})