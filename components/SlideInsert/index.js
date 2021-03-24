import React, { useState } from 'react';
import {View,Text,ImageBackground,TextInput, ToastAndroid} from 'react-native'
import styles from '../SlideInsert/styles';
import StyledButton from '../StyledButton';

const SlideInsert = (props) =>{

    const [descricao, setDescricao] = useState('Mercado');
    const [valor, setValor] = useState('10,00');

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
          
            <View style={styles.subtitle}>
              <Text style={styles.title}>Descrição:</Text>
              <TextInput 
              style={styles.imput}
              placeholder='Compra de Mercado'
              onChangeText={()=>setDescricao()}
              /> 


            </View>

            <View style={styles.subtitle}>
              <Text style={styles.title}>Valor:</Text>
              <TextInput 
              keyboardType='numeric'
              style={styles.imput}
              placeholder='R$ 40,00'
              onChangeText={()=> setValor() }
              />

              <View style={styles.buttonsContainer}>
              <StyledButton 
              type="secondary"
              content={'Adicionar Compra'}
              onPress={()=> {
               console.warn("Compra Adicionada!");
               showToast();
              
            }}
            />
              </View>

            </View> 
        </View>
    );

};
export default SlideInsert;