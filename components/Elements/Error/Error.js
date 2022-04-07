import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Error = ({ children }) => {
  function goToHome() {
    history.push('/home');
  }

  return (
    <View>
      <Text style={styles.text}>{children}</Text>
      <Button title="Go Back Home" onPress={goToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
