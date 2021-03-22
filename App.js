import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.carContainer}>

      <ImageBackground 
      source={require('../TeslaClone/assets/images/money.jpg')} 
      style={styles.image}
      />
      
                
        <View style={styles.titles}>
          <Text style={styles.title}>Projeto</Text>
          <Text style={styles.subtitle}>Planejador Financeiro</Text>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{
    width:'100%',
    height:'100%',
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
  }
  



});
