import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const SlideItem = (props) =>{
    return(
        <View style={styles.carContainer}>

        <ImageBackground 
        source={require('../../assets/images/money.jpg')} 
        style={styles.image}
        />        
                  
          <View style={styles.titles}>
            <Text style={styles.title}>Projeto</Text>
            <Text style={styles.subtitle}>Planejador Financeiro</Text>
          </View>

          <StyledButton type="primary"/>
  
        </View>


    );     
    

};

export default SlideItem;