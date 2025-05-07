import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, Text, Image, View,
  TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import axios from 'axios'; // não esquece de importar o axios!
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

export default function AreaUsuario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);

  async function buscarCEP() {
    try {
      const cepLimpo = cep.replace(/\D/g, '');
      const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      setDadosCep(resposta.data);
    } catch (error) {
      setDadosCep({ logradouro: 'CEP inválido ou erro na busca' });
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

            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#666"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="CPF"
              placeholderTextColor="#666"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              placeholderTextColor="#666"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={setTelefone}
            />
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

            <TextInput
              style={styles.input}
              placeholder="CEP"
              placeholderTextColor="#666"
              keyboardType="numeric"
              value={cep}
              onChangeText={setCep}
            />

            <TouchableOpacity style={styles.button} onPress={buscarCEP}>
              <Text style={styles.buttonText}>Buscar CEP</Text>
            </TouchableOpacity>

            {dadosCep && (
              <View style={{ marginTop: 10 }}>
                <Text style={styles.resultText}>Rua: {dadosCep?.logradouro}</Text>
                <Text style={styles.resultText}>Bairro: {dadosCep?.bairro}</Text>
                <Text style={styles.resultText}>Cidade: {dadosCep?.localidade}</Text>
                <Text style={styles.resultText}>UF: {dadosCep?.uf}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Rodape />
    </SafeAreaView>
  );
}
