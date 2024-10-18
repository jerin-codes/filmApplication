import React,{useState} from "react";
import {View,Text,StyleSheet, TouchableOpacity,Image, TouchableNativeFeedback,ImageBackground} from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import Images from "../constans/Images";
import { getPoster } from "../services/MovieService";


const MovieCard=({title,poster,language,voteAverage,voteCount})=>{
    const [liked,setLiked]=useState(false)
    // console.log("llo",)
        return (
            <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground style={style.container} imageStyle={{borderRadius:12}} source={{uri:getPoster(poster)}}>
                <View style={style.imdbcontainer}>
                    <Image source={Images.IMDB} style={style.imdbImage}  resizeMode="cover"/>
                    <Text style={style.imdbRating}>{voteAverage}</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>{setLiked(!liked)}}>
                <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "red" : "white"} style={{position:"absolute",bottom:10,left:10,}} />
                </TouchableNativeFeedback>
            </ImageBackground>
            <View>
                <Text style={style.MovieTitle} numberOfLines={3}>{title}</Text>
                <View  style={style.MoviesubTitleContainer}>
                    <Text style={style.MovieSubTitle}>language:{language}</Text>
                    <View style={style.rowAndCentre}>
                    <AntDesign name="heart" size={24} color="red" style={{marginRight:6}} />
                        <Text style={style.MovieSubTitle}>{voteCount}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    
    const style=StyleSheet.create({
        container:{
            backgroundColor:"black",
            
            height:340,
            width:230,
            borderRadius:12,
            elevation:5,
            marginVertical:5,
            marginTop:30
        },
        MovieTitle:{
            fontFamily:"Bold",
            color:"black",
            paddingVertical:2,
            marginTop:5,
            marginLeft:6,
            width:230
        },
        MoviesubTitleContainer:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"

        },
        MovieSubTitle:{
            fontSize:12,
            fontFamily:"Regular",
            marginLeft:6

        },
        rowAndCentre:{
            flexDirection:"row",
            alignItems:"center"
        },
        imdbcontainer:{
            flexDirection:"row",
            alignItems:"center",
            alignSelf:"flex-end",
            backgroundColor:"goldenrod",
            borderBottomLeftRadius:5,
            borderTopRightRadius:12,
            paddingVertical:3
            

        },
        imdbImage:{
            height:20,
            width:50

        },
        imdbRating:{
            marginright:5,
            color:"red",
            fontFamily:"Bold"
        }
    })

    export default MovieCard;