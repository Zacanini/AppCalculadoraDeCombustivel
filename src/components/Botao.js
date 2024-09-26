import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Botao = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ea', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Botao;
