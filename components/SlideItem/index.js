import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const SlideItem = (props) =>{

  const {name,tagLine, image} = props;

    return(
        <View style={styles.carContainer}>

        <ImageBackground 
        source={image} 
        style={styles.image}
        />        
                  
          <View style={styles.titles}>
            <Text style={styles.title}>Projeto</Text>
            <Text style={styles.subtitle}>{name}</Text>
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

export default SlideItem;