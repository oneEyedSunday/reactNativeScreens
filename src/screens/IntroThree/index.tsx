import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const IntroThree = () => (
  <View style={styles.container}>
    <Text>Intro Three</Text>
  </View>
);

export default IntroThree;
