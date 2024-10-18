import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View ,Text} from 'react-native'
import { Dimensions } from 'react-native'
 const {height,widht} =Dimensions.get("screen")
 //const setWidth =(w)=>((widht/100)*w)
export default function GenreCard({name,active,changeState}) {
 
    return (
      <TouchableOpacity style={{...styles.container,backgroundColor:active ? "red" : "white"  }} activeOpacity={0.3} onPress={()=>changeState(name)}>
        <Text style={{fontFamily:"Bold",olor:active ? "white" :"black"}}>{name}</Text>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    backgroundColor:"white",
    paddingVertical:6,
    elevation:3,
    marginVertical:2,
    marginTop:20,
    width:150,
    height:40,
    backgroundColor:"white"

    }
})
