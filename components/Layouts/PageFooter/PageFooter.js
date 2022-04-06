import { View, StyleSheet, Text } from 'react-native';

export const PageFooter = ({ children }) => {
  return <Text style={styles.footer}>{children}</Text>;
};

const styles = StyleSheet.create({
  footer: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
