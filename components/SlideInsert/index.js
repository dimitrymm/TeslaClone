import React from 'react';
import {View,Text,ImageBackground,TextInput} from 'react-native'
import styles from '../SlideInsert/styles';
import StyledButton from '../StyledButton';

const SlideInsert = (props) =>{

    const {name,image} = props;

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                style={styles.image}
        />        
                  
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            
          </View>

          <View>
             
              
              
          </View>

          <View style={styles.buttonsContainer}>
            <StyledButton 
              type="primary"
              content={'Adicionar Compra'}
              onPress={()=> {
               console.warn("Compra Adicionada!");
            }}
            />
            <StyledButton 
              type="secondary"
              content={'Adicionar Ganho'}
              onPress={()=> {
                console.warn('Ganho Adicionada');
            }}
            />
          </View> 
        </View>
    );

};
export default SlideInsert;