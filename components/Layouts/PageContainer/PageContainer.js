import { View, StyleSheet } from 'react-native';

export const PageContainer = ({ children }) => {
  return <View style={styles.cont}>{children}</View>;
};

const styles = StyleSheet.create({
  cont: {
    marginBottom: 40,
    padding: 5,
  },
});
