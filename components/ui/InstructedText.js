import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors.android';

const InstructedText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructedText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: 'open-sans',
    fontSize: 24,
  },
});
