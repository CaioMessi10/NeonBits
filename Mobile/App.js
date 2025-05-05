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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Area do Usuario" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Meus Anuncios" component={Tela1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>NeonBits</Text>
    </View>
  );
}

function Rodape() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>rodapé</Text>
    </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  async function PegarDados() {
    if (email === 'danrley@email.com' && senha === '131340') {
      navigation.navigate('Home');
    } else {
      console.log('Email ou senha incorretos');
    }
  }

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

  function voltarCEP() {
    setCep('');
    setMostrarResultado(false);
    setDadosCep(null);
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

          <Image source={require('./imagens/abertura.jpg')} style={styles.image} />

          <View style={styles.contentBox}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
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
            <TouchableOpacity style={styles.button} onPress={PegarDados}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Consulta de CEP</Text>

          {!mostrarResultado ? (
            <View style={styles.contentBox}>
              <TextInput
                style={styles.input}
                placeholder="Digite o CEP"
                placeholderTextColor="#666"
                value={cep}
                onChangeText={setCep}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.button} onPress={buscarCEP}>
                <Text style={styles.buttonText}>Buscar CEP</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.contentBox}>
              <Text style={styles.resultText}>Rua: {dadosCep?.logradouro}</Text>
              <Text style={styles.resultText}>Bairro: {dadosCep?.bairro}</Text>
              <Text style={styles.resultText}>Cidade: {dadosCep?.localidade}</Text>
              <Text style={styles.resultText}>UF: {dadosCep?.uf}</Text>

              <TouchableOpacity style={styles.button} onPress={voltarCEP}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      <Rodape />
    </SafeAreaView>
  );
}

export function Home() {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const descricaoEmpresa = `Nossa empresa é especializada na venda e troca de jogos digitais e físicos com pessoas de todo o Brasil pela internet. Oferecemos uma plataforma segura e prática para gamers realizarem trocas ou adquirirem novos títulos com facilidade.`;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />
      <Navbar />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.contentBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setMostrarDescricao(!mostrarDescricao)}
          >
            <Text style={styles.buttonText}>detalhes sobre empresa</Text>
          </TouchableOpacity>

          {mostrarDescricao && (
            <Text style={styles.resultText}>{descricaoEmpresa}</Text>
          )}
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.title}>carrossel</Text>
          <View style={styles.placeholderBox} />
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.title}>oferta especial</Text>
          <View style={styles.placeholderBox} />
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.title}>produtos para troca</Text>
          <View style={styles.placeholderBox} />
        </View>
      </ScrollView>

      <Rodape />
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
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />
      <Navbar />

      <ScrollView>
        <Text style={styles.title}>Lanche Especial</Text>

        <View style={styles.contentBox}>
          <Image
            source={require('./imagens/Lanche1.jpeg')}
            style={{ width: '100%', height: 180, borderRadius: 10 }}
          />
          <Text style={styles.resultText}>
            Pedaços de paleta bovina, marinada por 24 horas em cerveja, vinho e ervas,
            com bacon, champignon e cenoura, guarnecidos de cebola palha frita e farofa de ovos.
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4bebe',
  },
  navbar: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
  },
  navbarText: {
    color: '#ffcc00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#ffcc00',
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: '#e2e2e2',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    marginVertical: 15,
  },
  placeholderBox: {
    backgroundColor: '#999',
    borderRadius: 10,
    height: 150,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#ffcc00',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionBox: {
    backgroundColor: '#e2e2e2',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
