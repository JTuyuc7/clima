import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, Text, Image} from 'react-native';

const { width, height } = Dimensions.get('screen');
const Clima = ({climaResultado, setColor }) => {

    const { name, main, weather } = climaResultado;
    console.log(weather[0].icon)

    if(!name) return null;

    const getTempC = (temp) => {
        var tempFixed = temp - 273.15;
        return tempFixed.toFixed(2)
    }

    const getTempColor = (temp) => {
        var tempFixed = temp - 273.15;
        setColor(parseInt(tempFixed))
        return tempFixed.toFixed(2)
    }

    return (  
        <>
            <SafeAreaView style={ styles.mainContainer}>
                <View >
                    <Text style={styles.textoName}>Ahora en { name }</Text>
                </View>

                <View style={styles.cClima}>
                    <Text style={styles.mainTemp}>{getTempColor(main?.temp)}</Text>
                    <View>
                        <Text style={ styles.textoGrados}>&#x2103;</Text>

                        <Image
                            style={{ height: 60, width: 60, }}
                            source={{ uri: `http://openweathermap.org/img/w/${climaResultado.weather[0].icon}.png` }}
                        />
                    </View>

                    <View style={styles.maxAndmin}>
                        <Text style={styles.textMaxAnMin}>Maxima {getTempC(main?.temp_min)} <Text>&#x2103;</Text></Text>
                        <Text style={styles.textMaxAnMin}>Minima {getTempC(main?.temp_max)} <Text>&#x2103;</Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        //backgroundColor: 'cornflowerblue',
        justifyContent: 'center',
        paddingVertical: 30
    },
    textoName: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainTemp: {
        fontWeight: 'bold',
        fontSize: 55,
        color: '#FFF',
        marginTop: 10
    },
    cClima: {
        //backgroundColor: 'green',
        paddingVertical: 15,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    textoGrados: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 10,
        marginLeft: 20
    },
    maxAndmin: {
        paddingHorizontal: 10,
        //backgroundColor: 'yellow',
        marginLeft: 15,
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textMaxAnMin:{
        color: "#FFF",
        fontSize: 16
    }
})

export default Clima;