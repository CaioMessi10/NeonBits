import React, { useContext, useState } from 'react';
import {
  SafeAreaView, StatusBar, Text, View,
  TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView, Keyboard
} from 'react-native';
import { AutenticadoContexto } from '../Contexts/authContexts';

import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { loginEntrada } = useContext(AutenticadoContexto)

  async function dadosLogin(e) {
    e.preventDefault();
    try {
      if (!email || !senha) {
        console.log("Prencha todos os campos");
      };
      await loginEntrada(email, senha);
    } catch (err) {
      console.log(err);
    };
  };


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

            <TouchableOpacity style={styles.button} onPress={dadosLogin}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Rodape />
    </SafeAreaView>
  );
}
