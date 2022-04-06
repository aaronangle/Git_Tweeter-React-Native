import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar } from '../../../Search/components/SearchBar/SearchBar';

export const UserNotFound = ({ username }) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.cont__header}>¯\_(ツ)_/¯ </Text>
      <Text>Hmm... we couldn't find {username} on GitHub. Try searching for a different user</Text>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  cont__header: {
    color: '#657786',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
