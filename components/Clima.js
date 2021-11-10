import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, Text} from 'react-native';

const { width, height } = Dimensions.get('screen');
const Clima = () => {
    return (  
        <>
            <SafeAreaView>
                <View>
                    <Text>Clima</Text>
                </View>
            </SafeAreaView>
        </>
    );
}
 
export default Clima;