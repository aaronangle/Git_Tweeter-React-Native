import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useHistory } from '../../../../react-router';

export const SearchBar = () => {
  const history = useHistory();
  const [text, onChangeText] = React.useState('');

  function goToUser() {
    history.push(`/profile/${text}`);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search By GitHub Username"
        onEndEditing={goToUser}
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
