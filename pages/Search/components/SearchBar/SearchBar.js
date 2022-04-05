import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export const SearchBar = () => {
  const [text, onChangeText] = React.useState('');
  function checkit() {
    console.log(text);
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search By GitHub Username"
        onEndEditing={checkit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 55,
    backgroundColor: '#e1e8ed',
  },
});
