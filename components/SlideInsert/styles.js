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
        fontSize:16,
        color:'#2E5134'
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
      }
});
export default styles;