import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableHighlight, TouchableWithoutFeedback, Animated, Alert, Keyboard } from 'react-native';
import { Picker } from '@react-native-community/picker';

const { width, height } = Dimensions.get('screen')

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const { pais, ciudad } = busqueda;

    const [ animacionBoton ] = useState( new Animated.Value(1))
    const animacionEntrada = () => {
        Animated.spring( animacionBoton, {
            toValue: 0.65,
            useNativeDriver: true
        }).start()
    }
    const animacionSalida = () => {
        Animated.spring( animacionBoton, {
            toValue: 1,
            friction: 1,
            tension: 20,
            useNativeDriver: true
        } ).start()
    }

    const estiloAnimacion = {
        transform: [{
            scale: animacionBoton 
        }]
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Los campos son obligatorios',
            [{ text: 'Entiendo'}]
        )
    }

    const consultarClima = () => {
        if( pais.trim() === '' || ciudad.trim() === ''){
            mostrarAlerta()
            return
        }

        guardarConsultar(true)
        Keyboard.dismiss()
    }

    return (  
        <>
            <SafeAreaView>
                <View style={ styles.inputContainer }>
                    <TextInput
                        style={ styles.inputForm }
                        placeholder="Ingresa tu ciudad"
                        onChangeText={ (ciudad) => guardarBusqueda({ ...busqueda, ciudad })}
                        placeholderTextColor="#666"
                        value={ ciudad }
                    />
                </View>

                <View>
                    <View style={ styles.inputContainer }>
                        <Picker
                            style={ styles.pickerSelect }
                            selectedValue={ pais }
                            onValueChange={ (pais) => {
                                guardarBusqueda({ ...busqueda, pais})
                            }}
                        >
                            <Picker.Item label="Selecciona" value="" />
                            <Picker.Item label="Mexico" value="MX" />
                            <Picker.Item label="Guatemala" value="GT" />
                            <Picker.Item label="Estados Unidos" value="US" />
                            <Picker.Item label="Colombia" value="CO" />
                            <Picker.Item label="Argentina" value="AR" />
                            <Picker.Item label="España" value="ES" />
                        </Picker>
                    </View>
                </View>

                <View style={ styles.inputContainer }>
                    <TouchableWithoutFeedback
                        onPressIn={ () => animacionEntrada()}
                        onPressOut={ () => animacionSalida()}
                        onPress={ () => consultarClima()}
                    >
                        <Animated.View style={[styles.buttonForm, estiloAnimacion]}>
                            <Text style={styles.textButton}>Buscar Clima</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    inputForm: {
        backgroundColor: "#FFF",
        height: height * 0.055,
        width: width * 0.9,
        borderRadius: 15,
        paddingLeft: 15
    },
    inputContainer: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pickerSelect: {
        backgroundColor: "#FFF",
        height: height * 0.055,
        width: width * 0.9,
        borderRadius: 15,
    },
    buttonForm: {
        backgroundColor: "purple",
        width: width * 0.9,
        height: height * 0.055,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default Formulario;