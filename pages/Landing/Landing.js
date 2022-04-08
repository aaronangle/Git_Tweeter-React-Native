import { StyleSheet, Text, View, Button, Animated, Easing, Linking } from 'react-native';
import { useHistory } from '../../react-router';
import { Link } from '../../components/Elements/Link';

export const Landing = () => {
  const history = useHistory();
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 9000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  function goToHome() {
    history.push('/home');
  }

  const goToPortfolio = async () => {
    try {
      await Linking.openURL();
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <Animated.Image
          source={require('../../assets/reactlogo.png')}
          alt=""
          style={{ transform: [{ rotate: spin }] }}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.main__heading}>Welcome to Git_Tweeter</Text>
        <Text style={styles.main__text}>
          A Twitter-ish clone for GitHub data &amp; users built with React Native and React-Query
          using GitHub's API
        </Text>
        <Button title="Continue" onPress={goToHome} />
        <View style={styles.main__link}>
          <Link url={'https://aaronangle.github.io/Portfolio/'}>View My Other Projects</Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  side: {
    backgroundColor: '#1e2127',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: '50%',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '50%',
    padding: 15,
  },
  main__heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  main__text: {
    marginBottom: 25,
  },
  main__projects: {
    marginTop: 50,
    textAlign: 'center',
    color: '#1da1f2',
    textDecorationColor: '#1da1f2',
    textDecorationLine: 'underline',
  },
  main__link: {
    marginTop: 50,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
