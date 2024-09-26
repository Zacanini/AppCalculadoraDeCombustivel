import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ resultado }) => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoTexto}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultadoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Resultado;
