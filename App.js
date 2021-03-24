import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';
import SlideInsert from './components/SlideInsert';
import SlideItem from './components/SlideItem';




export default function App() {

  return (

    <ScrollView>
      <View style={styles.container}>

      
         <SlideItem 
        name={'testeX'} 
        image={require('./assets/images/money.jpg')}        
        />
      
      
        <SlideInsert
          name={'Testey'}
          image={require('./assets/images/ModelX.jpeg')}          
        />
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>          
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
