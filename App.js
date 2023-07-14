import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

export default function App() {
  const [activeScreens, setActiveScreen] = useState('');
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const handleActiveScreen = (pickedNumber) => {
    setActiveScreen(pickedNumber);
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handleGameOverScreen = (rounds) => {
    setGameIsOver(true);
    setGuessRound(rounds);
  };
  const handleGameStart = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setActiveScreen('');
  };

  let screens = <StartGameScreen pickNumber={handleActiveScreen} />;

  if (activeScreens && userNumber) {
    screens = (
      <GameScreen userNumber={userNumber} onGameOver={handleGameOverScreen} />
    );
  }

  if (gameIsOver) {
    screens = (
      <GameOverScreen
        userNumber={userNumber}
        btnStartNewGame={handleGameStart}
        roundsNumber={guessRounds}
      />
    );
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screens}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
