import { Router, Route, Link, Switch } from '../../../react-router';
import { StyleSheet, Text, View } from 'react-native';

export const NavigationBar = () => {
  return (
    <View style={styles.nav}>
      <Link to="/">
        <Text>Landing</Text>
      </Link>
      <Link to="/home">
        <Text>Home</Text>
      </Link>
      <Link to="/search">
        <Text>Search</Text>
      </Link>
      <Link to="/topics">
        <Text>Topics</Text>
      </Link>
      <Link to="/profile/aaronangle">
        <Text>Profile</Text>
      </Link>
      <Link to="/settings">
        <Text>Settings</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 300,
    backgroundColor: 'white',
    shadowColor: '#000',
    padding: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
