import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Rodape() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>rodapé</Text>
    </View>
  );
}
