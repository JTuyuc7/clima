import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('screen')

const Formulario = () => {
    return (  
        <>
            <SafeAreaView>
                <View>
                    <Text>Formulario api</Text>
                </View>
            </SafeAreaView>
        </>
    );
}
 
export default Formulario;