import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { pluralizeName } from '../../../utils';

export const CommitsDropdown = ({ event, showCommits }) => {
  const {
    payload: { commits },
  } = event;

  return (
    <View style="">
      <Text style={styles.text}>
        {commits.length} {pluralizeName('commit', commits.length)}
      </Text>
      {showCommits && (
        <View style={styles.cont}>
          {commits.map((commit, index) => {
            return (
              <Text style={styles.commit} key={index}>
                <Text style={styles.commit__span}>{commit.author.name}</Text> - {commit.message}
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    color: '#1da1f2',
  },
  cont: {
    marginTop: 10,
  },
  commit: {
    fontSize: 12,
    padding: 3,
    margin: 0,
  },
  commit__span: {
    fontWeight: 'bold',
  },
});
