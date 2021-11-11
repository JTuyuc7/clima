import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {

  const [ busqueda, guardarBusqueda ] = useState({
    pais: '',
    ciudad: ''
  });

  const [ consultar, guardarConsultar ] = useState(false)
  const [ climaResultado, guardarClimaResultado ] = useState({});
  const [ color, setColor ] = useState(0)
  console.log(color)
  const { pais, ciudad } = busqueda;
  useEffect(()  => {

    const getData = async () => {
      if( consultar ){
        const appID = '852f6c3b0df95b20629d21ecd58cad65';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
        console.log(url,'url data')
  
        try {
          const respuesta = await fetch( url );
          const resultado = await respuesta.json();
          guardarClimaResultado(resultado);
          guardarConsultar(false);

          guardarBusqueda({
            pais: '',
            ciudad: ''
          })
        } catch (error) {
          console.log(error, 'City or country not found')
          mostrarAlerta();
        }
      }
    }

    getData()
  }, [consultar])

  //API key 4c3703a0069350ed1dc22059b49eb390

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'City or Country not found',
      [{ text: 'Entiendo'}]
    )
  }

  return (  
    <>
      <SafeAreaView 
        style={[ styles.mainContainer, { backgroundColor: 
          color === 0 ? 'rgb(71, 149, 212)' 
          : color > 0 && color < 15 ? 'rgb(105, 108, 149)' 
          : color > 15 && color < 22 ? 'rgb(71, 147, 212)' 
          : color > 22 ? 'rgb(178, 28, 61)' : 'rgb(178, 28, 61)'  }]}>

        <View>
          <Clima
            climaResultado={climaResultado}
            setColor={setColor}
          />
        </View>

        <View>
          <Text style={styles.tituloClima}>Clima React Native</Text>
        </View>

        <View>
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: 'rgb(71, 149, 212)'  ,
    flex: 1,
    justifyContent: 'center'
  },
  tituloClima: {
    color: "#FFF",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase'
  }
})

export default App;