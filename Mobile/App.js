import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Aba Inicio" component={Home} />
        <Drawer.Screen name="Lanches rápidos" component={Tela1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export function Home() {
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const [nomeInput, setNomeInput] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');

  async function buscarCEP() {
    try {
      const cepLimpo = cep.replace(/\D/g, '');
      const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      setDadosCep(resposta.data);
    } catch (error) {
      setDadosCep({ logradouro: 'CEP inválido ou erro na busca' });
    }
    setMostrarResultado(true);
  }

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput));
    setNomeInput('');
    setNomeSalvo(nomeInput);
  }

  async function pegarNome() {
    const iNome = await AsyncStorage.getItem('nome');
    const pNome = JSON.parse(iNome);
    setNomeSalvo(pNome);
  }

  function voltar() {
    setCep('');
    setMostrarResultado(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={styles.headerText}>Lanchonete do Caio e Yza</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 30 }}>
        <Image
          source={require('./imagens/abertura.jpg')}
          style={styles.image}
        />
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={styles.resultText}>
          A melhor comida de boteco da região{"\n"}
          Rua da Macarronada n. 46 quadra 3{"\n"}
          Centro - Bauru - SP - Cep 17000-00
        </Text>
      </View>

      {/* Exibir campos de CEP */}
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

          <TouchableOpacity style={styles.button} onPress={buscarCEP}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      ) : (
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

      {/* Exibir campos para salvar e carregar nome */}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Salvar e Carregar Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o Nome"
          placeholderTextColor="#999"
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <TouchableOpacity style={styles.button} onPress={salvarNome}>
          <Text style={styles.buttonText}>Gravar Nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={pegarNome}>
          <Text style={styles.buttonText}>Pegar Nome</Text>
        </TouchableOpacity>
        {nomeSalvo !== '' && (
          <Text style={styles.resultText}>
            Nome Digitado é: <Text style={{ fontWeight: 'bold' }}>{nomeSalvo}</Text>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

function Tela1() {
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
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./imagens/Lanche1.jpeg')}
            style={{ width: 100, height: 100, borderRadius: 15 }}
          />
        </View>
        <View style={{ flex: 2, paddingLeft: 10 }}>
          <Text style={{ fontSize: 16 }}>
            Pedaços de paleta bovina, marinada por 24 horas em cerveja, vinho e ervas,
            com bacon, champignon e cenoura, guarnecidos de cebola palha frita e farofa de ovos.
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Biblioteca AsyncStorage</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o Nome"
          placeholderTextColor="#999"
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <TouchableOpacity style={styles.button} onPress={salvarNome}>
          <Text style={styles.buttonText}>Gravar Nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={pegarNome}>
          <Text style={styles.buttonText}>Pegar Nome</Text>
        </TouchableOpacity>
        {nomeSalvo !== '' && (
          <Text style={styles.resultText}>
            Nome Digitado é: <Text style={{ fontWeight: 'bold' }}>{nomeSalvo}</Text>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#ff6600',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  resultContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  resultText: {
    fontSize: 16,
    marginTop: 15,
    color: '#333',
    fontFamily: 'Roboto',
  },
  headerText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
  image: {
    borderRadius: 15,
    width: 300,
    height: 180,
    marginVertical: 30,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
});
