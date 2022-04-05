import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const Avatar = ({ img }) => {
  return <Image source={{ uri: img }} style={styles.avatar} alt="avatar" />;
};

const styles = StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 9999,
  },
});
