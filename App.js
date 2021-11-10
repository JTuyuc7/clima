import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  return (  
    <>
      <SafeAreaView style={ styles.mainContainer}>
        <Text>Clima React Native</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    flex: 1,

  }
})

export default App;