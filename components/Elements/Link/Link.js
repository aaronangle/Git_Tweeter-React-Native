import { View, Text, StyleSheet, Linking } from 'react-native';

export const Link = ({ url, children }) => {
  const goToLink = async () => {
    try {
      await Linking.openURL(url);
    } catch (err) {}
  };

  return (
    <View>
      <Text onPress={goToLink} style={styles.link}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#1da1f2',
    textDecorationColor: '#1da1f2',
    textDecorationLine: 'underline',
  },
});
