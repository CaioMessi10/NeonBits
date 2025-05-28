import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, Text, Image, View,
  TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Keyboard
} from 'react-native';
import axios from 'axios';
import {
  initializeApp,
  getApps,
  getApp
} from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  set
} from 'firebase/database';

import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF_tPaB8SB3eqe5whAf9cjtlnPk3MwWWg",
  authDomain: "neon-bits.firebaseapp.com",
  databaseURL: "https://neon-bits-default-rtdb.firebaseio.com",
  projectId: "neon-bits",
  storageBucket: "neon-bits.firebasestorage.app",
  messagingSenderId: "251207008824",
  appId: "1:251207008824:web:dc7e539b3f2f0c11485ccd",
  measurementId: "G-LCFH0ZEW57"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);

export default function AreaUsuario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);

  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  async function buscarCEP() {
    try {
      const cepLimpo = cep.replace(/\D/g, '');
      const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = resposta.data;

      setDadosCep(data);
      setRua(data.logradouro || '');
      setBairro(data.bairro || '');
      setCidade(data.localidade || '');
      setUf(data.uf || '');
    } catch (error) {
      setDadosCep({ logradouro: 'CEP inválido ou erro na busca' });
      setRua('');
      setBairro('');
      setCidade('');
      setUf('');
    }
  }

  async function botaoCadastrar() {
    if (!nome || !cpf || !telefone || !email || !senha || !cep || !rua || !bairro || !cidade || !uf) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      const usuariosRef = ref(database, 'usuarios');
      const novaRef = push(usuariosRef);
      await set(novaRef, {
        nome,
        cpf,
        telefone,
        email,
        senha,
        cep,
        rua,
        bairro,
        cidade,
        uf
      });

      alert('Usuário cadastrado com sucesso!');
      setNome('');
      setCpf('');
      setTelefone('');
      setEmail('');
      setSenha('');
      setCep('');
      setRua('');
      setBairro('');
      setCidade('');
      setUf('');
      Keyboard.dismiss();
    } catch (error) {
      alert('Erro ao salvar no Firebase: ' + error.message);
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.title}>Área do Usuário</Text>

          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image
              source={require('../imagens/dexter.jpg')}
              style={styles.profileImage}
            />
            <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#000' }}>
              Que é você? Fale e nós buscaremos você!
            </Text>
          </View>

          <View style={styles.contentBox}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Informações do perfil do cliente</Text>

            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#666" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#666" keyboardType="numeric" value={cpf} onChangeText={setCpf} />
            <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor="#666" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#666" secureTextEntry value={senha} onChangeText={setSenha} />
            <TextInput style={styles.input} placeholder="CEP" placeholderTextColor="#666" keyboardType="numeric" value={cep} onChangeText={setCep} />

            <TouchableOpacity style={styles.button} onPress={buscarCEP}>
              <Text style={styles.buttonText}>Buscar CEP</Text>
            </TouchableOpacity>

            <TextInput style={styles.input} placeholder="Rua" placeholderTextColor="#666" value={rua} onChangeText={setRua} />
            <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor="#666" value={bairro} onChangeText={setBairro} />
            <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#666" value={cidade} onChangeText={setCidade} />
            <TextInput style={styles.input} placeholder="UF" placeholderTextColor="#666" value={uf} onChangeText={setUf} />

            <TouchableOpacity style={styles.button} onPress={botaoCadastrar}>
              <Text style={styles.buttonText}>Salvar no Firebase</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Rodape />
    </SafeAreaView>
  );
}
