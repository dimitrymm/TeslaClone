import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from '../StyledButton/style';



const StyledButton = (props) =>{

    const type = props.type;
    console.warn(type);

    return(
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={()=>{
                    console.warn('Ola Mundo')
                }}
            >
                <Text style={styles.text}>Adicionar Compra</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;