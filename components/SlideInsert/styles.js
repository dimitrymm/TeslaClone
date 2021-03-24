import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({

      container:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
        
    
      },
      title:{
        fontSize:40,
        fontWeight:'600',
       
      },
      subtitle:{
        width:'100%',
        backgroundColor:'gray',
        borderRadius:20,
        padding:8,
        marginBottom:10,
        fontSize:16,
        fontWeight:'800',
        color:'#2E5134',
        top:70,
        alignItems:'center',
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
        position:'relative',        
        width:'100%',
      },
      imput:{
        
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:20,
        padding:10,
        margin:15,
        width:200,
        backgroundColor:'white',
        width:'100%',
      }
});
export default styles;