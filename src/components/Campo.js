import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ TextoPlaceHolder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={TextoPlaceHolder}
        onChangeText={onChangeText} 
        value={value} 
        keyboardType="numeric" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10, 
    alignSelf: 'center', 
  },
});

export default Input;
