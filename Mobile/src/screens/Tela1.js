import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

export default function Tela1() {
  const [nomeInput, setNomeInput] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput));
    setNomeInput('');
    setNomeSalvo('');
  }

  async function pegarNome() {
    const iNome = await AsyncStorage.getItem('nome');
    const pNome = JSON.parse(iNome);
    setNomeSalvo(pNome);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />
      <Navbar />

      <ScrollView>
        <Text style={styles.title}>Busque seus Jogos aqui</Text>

        <View style={styles.contentBox}>
          <Text style={styles.resultText}>
            Acesse e gerencie facilmente suas informações pessoais, preferências e atividades em um só lugar. Na Área do Usuário
          </Text>
        </View>

        <Text style={styles.title}>Salvar e Carregar Nome</Text>

        <View style={styles.contentBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite o Nome"
            placeholderTextColor="#666"
            value={nomeInput}
            onChangeText={setNomeInput}
          />
          <TouchableOpacity style={styles.button} onPress={salvarNome}>
            <Text style={styles.buttonText}>Gravar Nome</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pegarNome}>
            <Text style={styles.buttonText}>Pegar Nome</Text>
          </TouchableOpacity>
          {nomeSalvo !== '' && (
            <Text style={styles.resultText}>
              Nome digitado é: <Text style={{ fontWeight: 'bold' }}>{nomeSalvo}</Text>
            </Text>
          )}
        </View>
      </ScrollView>

      <Rodape />
    </SafeAreaView>
  );
}
