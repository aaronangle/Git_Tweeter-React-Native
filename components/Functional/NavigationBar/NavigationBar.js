import { Router, Route, Link, Switch } from '../../../react-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export const NavigationBar = () => {
  return (
    <View style={styles.nav}>
      <Link to="/home" underlayColor="transparent">
        <Image
          source={require('../../../assets/home-circle-regular-24.png')}
          style={styles.row__image}
        />
      </Link>
      <Link to="/search" underlayColor="transparent">
        <Image
          source={require('../../../assets/search-regular-24.png')}
          style={styles.row__image}
        />
      </Link>
      <Link to="/topics" underlayColor="transparent">
        <Image source={require('../../../assets/news-regular-24.png')} style={styles.row__image} />
      </Link>
      <Link to="/profile/aaronangle" underlayColor="transparent">
        <Image
          source={require('../../../assets/user-circle-regular-24.png')}
          style={styles.row__image}
        />
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
