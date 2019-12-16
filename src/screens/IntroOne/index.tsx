import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const IntroOne = () => (
  <View style={styles.container}>
    <Text>Intro One</Text>
  </View>
);

export default IntroOne;
