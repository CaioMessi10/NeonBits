import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, Text, View,
  TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView, Keyboard
} from 'react-native';

import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

export default function AreaUsuario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function botaoCadastrar() {
    if (!email || !senha) {
      alert('Preencha email e senha');
      return;
    }

    try {
      // Apenas email e senha
      console.log('Cadastro básico:', { email, senha });

      alert('Cadastro realizado com sucesso!');
      setEmail('');
      setSenha('');
      Keyboard.dismiss();
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#c4bebe' }}>
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />
      <Navbar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>Cadastro Rápido</Text>

          <View style={styles.contentBox}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#666"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={botaoCadastrar}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Rodape />
    </SafeAreaView>
  );
}
