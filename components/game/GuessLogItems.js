import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors.android';

const GuessLogItems = ({ guess, roundNumber }) => {
  return (
    <View style={styles.itemList}>
      <Text>#{roundNumber}</Text>
      <Text> Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItems;

const styles = StyleSheet.create({
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent500,
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    borderWidth: 1,
    width: '100%',
  },
});
