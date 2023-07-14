import React, { useEffect, useMemo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructedText from '../components/ui/InstructedText';

import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import GuessLogItems from '../components/game/GuessLogItems';

const generateRandomNumber = (min, max, exclude) => {
  const rdmNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (rdmNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rdmNumber;
  }
};

let minNumber = 1;
let maxNum = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = useMemo(
    () => generateRandomNumber(minNumber, maxNum, userNumber),
    [minNumber, maxNum, userNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNum = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    //! check this
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'you know this is wrong...', [
        {
          text: 'sorry',
          styles: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxNum = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRndNum = generateRandomNumber(minNumber, maxNum, currentGuess);
    setCurrentGuess(newRndNum);
    setRounds((preRound) => [...preRound, newRndNum]);
  };

  const guessRoundsListLength = rounds.length;

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructedText style={styles.instructionText}>
          Higher or Lower?
        </InstructedText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name='md-remove' size={20} color='white' />}
              onPress={nextGuessHandler.bind(this, 'lower')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name='md-add' size={20} color='white' />}
              onPress={nextGuessHandler.bind(this, 'greater')}
            />
          </View>
        </View>
      </Card>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <GuessLogItems
              guess={itemData.item}
              roundNumber={guessRoundsListLength - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});
