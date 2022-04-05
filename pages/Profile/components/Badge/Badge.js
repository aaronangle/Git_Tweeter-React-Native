import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Badge = ({ isStars, count }) => {
  return (
    <View style={styles.row}>
      {isStars ? (
        <Image source={require('../../../../assets/star-solid-24.png')} style={styles.row__image} />
      ) : (
        <Image
          source={require('../../../../assets/git-repo-forked-regular-24.png')}
          style={styles.row__image}
        />
      )}
      <Text className={styles.badge__count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 3,
  },
  row__image: {
    height: 18,
    width: 18,
  },
});
