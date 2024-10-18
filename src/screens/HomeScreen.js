import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import GenreCard from '../components/GenreCard';
import ItemSeperator from '../components/ItemSeperator';
import { useState ,useEffect} from 'react';
// import Fonts from "../constans/Fonts"
// import fonts from '../constans/Fonts';
import MovieCard from '../components/MoviCard';
import { getNowPlaying,getALlGenres } from '../services/MovieService';


const Genres=["All","Action","Comedey","Romance","Horror"]
export default function HomeScreen() {

  const [activeGenre,setActiveGenre]=useState("All");
  const [nowPlaying,setNowPlaying]=useState({})
  const [genres,setGenres]=useState({})
  
  // console.log("Helloe",nowPlaying)
useEffect(()=>{
  // console.log("H")
  getNowPlaying().then((response)=>{
    
    setNowPlaying(response.data)
    
  
})
},[])
  return (
    
     
      
      <ScrollView style={styles.scrollContent}>
         <StatusBar backgroundColor='white' barStyle="light-content"  hidden={false}/>
       <View style={styles.headerContent}>
        <Text style={{fontSize:22,marginTop:50,fontFamily:"Bold"}}>Now Playing</Text>
        <Text style={{fontSize:15,color:"blue",marginTop:50,fontFamily:"Regular"}}>VIEW ALL</Text>
       </View>
       <View style={{marginTop:10}}>
        <FlatList data={Genres} keyExtractor={(item)=>item} horizontal
        //  ListHeaderComponent={()=><ItemSeperator/>}
        //  ListFooterComponent={()=><ItemSeperator/>}
         showsHorizontalScrollIndicator={false}
        
         ItemSeparatorComponent={()=><ItemSeperator width={20}/>} 
         ListHeaderComponent={()=><ItemSeperator width={20}/>}
         ListFooterComponent={()=><ItemSeperator  width={20}/>}
         renderItem={({item, index}) => {
          return (
              <GenreCard 
                  name={item} 
                  active={item === activeGenre ? true : false} 
                  changeState={(genreName) => setActiveGenre(genreName)} />
                  
             
          );
      }} />
      
       </View>
       <View>
        <FlatList
        data={nowPlaying.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id.toString()}

        ItemSeparatorComponent={()=><ItemSeperator width={20}/>} 
         ListHeaderComponent={()=><ItemSeperator width={20}/>}
         ListFooterComponent={()=><ItemSeperator  width={20}/>}
         renderItem={({item})=><MovieCard title={item.original_title} language={item.original_language} voteAverage={item.vote_average} voteCount={item.vote_count} poster={item.poster_path}/>}
        />
       </View>
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
backgroundColor:"green",
   
    // Remove padding from the main container
    // padding: 60,
  },
  scrollContent: {
    
    padding: 30, // Adjust padding as needed for your content
    // Optionally, add paddingTop if you need spacing from the StatusBar
    // paddingTop: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily:"Regular"
  },
  headerContent:{
    flexDirection:"row",
    justifyContent:"space-between",
   alignItems:"center",
    paddingHorizontal:10,
    paddingVertical:10

  }
});
