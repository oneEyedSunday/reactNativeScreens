import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const IntroTwo= () => (
  <View style={styles.container}>
    <Text>Intro Two</Text>
  </View>
);

export default IntroTwo;
