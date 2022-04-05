import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SelectBar = ({ selectedView, setSelectedView }) => {
  return (
    <>
      <View style={styles.row}>
        <Text
          style={[styles.link, selectedView === 'events' && styles.selected]}
          onPress={() => setSelectedView('events')}
        >
          Events
        </Text>
        <Text
          style={[styles.link, selectedView === 'repos' && styles.selected]}
          onPress={() => setSelectedView('repos')}
        >
          Repos
        </Text>
        <Text
          style={[styles.link, selectedView === 'starred' && styles.selected]}
          onPress={() => setSelectedView('starred')}
        >
          Starred
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  link: {
    marginBottom: 0,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    paddingBottom: 5,
    color: 'black',
  },
  selected: {
    color: '#1da1f2',
    borderBottomWidth: 3,
    borderBottomColor: '#1da1f2',
  },
});
