import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import styles from '../styles/styles';

export default function Home() {
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

          {mostrarDescricao && <Text style={styles.resultText}>{descricaoEmpresa}</Text>}
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
