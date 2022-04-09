import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@hideWelcome', true);
  } catch (e) {}
};

export const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    (async function () {
      const value = await AsyncStorage.getItem('@hideWelcome');
      if (value !== null) {
        setShowWelcome(false);
      }
    })();
  });

  const storeData = async () => {
    setShowWelcome(false);
    try {
      await AsyncStorage.setItem('@hideWelcome', 'true');
    } catch (e) {}
  };

  return (
    <>
      {showWelcome && (
        <>
          <View style={styles.box}>
            <Pressable onPress={() => storeData()} style={styles.box__close}>
              <Text style={styles.box__x}>X</Text>
            </Pressable>
            <Text style={styles.box__heading}>👋 Welcome to Git_Tweeter</Text>
            <Text style={styles.box__text}>
              This app was built with React Native, React Query, and the GitHub API. GitHub only
              allows 30 API calls per minute. I've tried my best to reduce the number of calls made
              by caching the data, but if you do run into fetch error just wait a few seconds and
              refresh. PS: if you long press on an event that has a commit, the commit history will
              show up on the card.
            </Text>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f5f8fa',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#aab8c2',
    position: 'relative',
  },
  box__close: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
  box__x: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  box__heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  box__text: {},
});
