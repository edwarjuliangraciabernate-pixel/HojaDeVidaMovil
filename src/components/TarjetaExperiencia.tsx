
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.titulo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#1E3A8A',
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  empresa: {
    fontSize: 15,
    marginTop: 5,
    color: '#444',
  },
  periodo: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#444',
    marginTop: 10,
    lineHeight: 21,
  },
});
