import React, { useState } from 'react'
import apiCep from './api/apiCep'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {
  const [cep, setCep] = useState('')
  const [dadosCep, setDadosCep] = useState(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  async function buscaCEP() {
    try {
      const cepLimpo = cep.replace(/\D/g, '')
      const resposta = await apiCep.get(`${cepLimpo}/json`)
      setDadosCep(resposta.data)
    } catch (error) {
      setDadosCep({ logradouro: 'CEP inválido ou erro na busca' })
    }
    setMostrarResultado(true)
  }

  function voltar() {
    setCep('')
    setMostrarResultado(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {!mostrarResultado ? (
        <View style={styles.content}>
          <Text style={styles.title}>API de Busca de CEP</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o CEP"
            placeholderTextColor="#cbd5e1"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={buscaCEP}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Tela de resultado
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Resultado da busca</Text>
          <Text style={styles.resultText}>Rua: {dadosCep?.logradouro}</Text>
          <Text style={styles.resultText}>Bairro: {dadosCep?.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {dadosCep?.localidade}</Text>
          <Text style={styles.resultText}>UF: {dadosCep?.uf}</Text>

          <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={voltar}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0f2fe',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#f8fafc',
    marginBottom: 8,
  },
})
