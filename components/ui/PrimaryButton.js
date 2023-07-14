import React from 'react';
import { Text, View, StyleSheet, Pressable, ViewBase } from 'react-native';

export default function PrimaryButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <View style={styles.outerButton}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerButton: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    backgroundColor: '#72063c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
