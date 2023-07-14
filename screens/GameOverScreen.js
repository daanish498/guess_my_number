import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors.android';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ userNumber, roundsNumber, btnStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highligth}>{roundsNumber}</Text>{' '}
          rounds to geuess <Text style={styles.highligth}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton title='Start New Game' onPress={btnStartNewGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 36,
    borderWidth: 2,
    borderColor: Colors.primary800,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  highligth: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
  },
});
