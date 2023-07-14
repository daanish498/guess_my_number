import React, { useState } from 'react';

import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors.android';
import Card from '../components/ui/Card';
import InstructedText from '../components/ui/InstructedText';

const StartGameScreen = ({ pickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    console.log('Press');

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invailid Number!',
        'Number has be a number between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
    }
    pickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructedText>Enter a Number</InstructedText>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title='Reset' onPress={resetInputHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title='Confirm' onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  buttonContainer: {
    flex: 1,
  },
  input: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
  },
});
