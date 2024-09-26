import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from './src/components/Campo';
import Botao from './src/components/Botao';
import Resultado from './src/components/resultado'; 


export default function App() {
  // Estados :
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultadoTexto, setResultadoTexto] = useState('');

  const calcular = () => {
    console.log('Botão foi pressionado');
    const gasolinaValue = parseFloat(gasolina);
    const alcoolValue = parseFloat(alcool);
  
    let resultadoTexto = '';
  
    if (!isNaN(gasolinaValue) && !isNaN(alcoolValue)) {
      const resultado = alcoolValue / gasolinaValue;
  
      if (resultado < 0.7) {
        resultadoTexto = 'Melhor usar Álcool!';
      } else {
        resultadoTexto = 'Melhor usar Gasolina!';
      }
    } else {
      resultadoTexto = 'Por favor, insira valores válidos.';
    }
  
    setResultadoTexto(resultadoTexto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>ALCOOL ou GASOLINA?</Text>
      <Text>Digite o preço da gasolina:</Text>
      <Input TextoPlaceHolder="Gasolina" value={gasolina} onChangeText={setGasolina} />
      <Text>Digite o preço do álcool:</Text>
      <Input TextoPlaceHolder="Álcool" value={alcool} onChangeText={setAlcool} />
      <Botao title="Calcular" onPress={calcular} />
      <Resultado resultado={resultadoTexto} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20, 
  },
  Text:{
    color:"#6200ea",
    backgroundColor:"black",
    padding:5,
    marginBottom:100,
    borderRadius:5,
  }
});
