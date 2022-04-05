import React from 'react';
import { View, StyleSheet } from 'react-native';

export const RowContainer = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderBottomColor: '#e1e8ed',
    borderBottomWidth: 1,
  },
});
