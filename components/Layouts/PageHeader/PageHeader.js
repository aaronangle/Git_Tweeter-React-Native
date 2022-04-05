import { View, StyleSheet, Text } from 'react-native';

export const PageHeader = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    margin: 0,
    padding: 10,
    borderBottomColor: '#f5f8fa',
    borderBottomWidth: 2,
  },
});
