import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';

import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import MapView, { Marker } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location';
import styles from '../styles/styles'; // Mantém seus estilos globais

export default function Home() {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);
  const [localizacao, setLocalizacao] = useState(null);
  const mapaRef = useRef(null);

  const descricaoEmpresa = `Nossa empresa é especializada na venda e troca de jogos digitais e físicos com pessoas de todo o Brasil pela internet. Oferecemos uma plataforma segura e prática para gamers realizarem trocas ou adquirirem novos títulos com facilidade.`;

  useEffect(() => {
    async function requisitarPermissoes() {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const posicaoAtual = await getCurrentPositionAsync();
        setLocalizacao(posicaoAtual);
      }
    }

    requisitarPermissoes();
  }, []);

  useEffect(() => {
    const iniciarMonitoramento = async () => {
      await watchPositionAsync(
        {
          accuracy: LocationAccuracy.Highest,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (resposta) => {
          setLocalizacao(resposta);
          if (mapaRef.current) {
            mapaRef.current.animateCamera({
              center: resposta.coords,
              pitch: 11,
            });
          }
        }
      );
    };

    iniciarMonitoramento();
  }, []);

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

          {mostrarDescricao && <Text style={styles.resultText}>{descricaoEmpresa}</Text>}
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.title}>Mapa de Localização Atual</Text>
          <View style={localMapStyles.mapContainer}>
            {localizacao ? (
              <MapView
                ref={mapaRef}
                style={localMapStyles.map}
                loadingEnabled={true}
                initialRegion={{
                  latitude: localizacao.coords.latitude,
                  longitude: localizacao.coords.longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.003,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: localizacao.coords.latitude,
                    longitude: localizacao.coords.longitude,
                  }}
                  title="Você está aqui"
                />
              </MapView>
            ) : (
              <Text>Carregando localização...</Text>
            )}
          </View>
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

const localMapStyles = StyleSheet.create({
  mapContainer: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  map: {
    flex: 1,
  },
});
