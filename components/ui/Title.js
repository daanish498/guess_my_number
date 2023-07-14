import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    borderRadius: 1,
    borderWidth: 2,
    padding: 12,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
  },
});
