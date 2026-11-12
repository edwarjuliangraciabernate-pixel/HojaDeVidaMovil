
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert
} from 'react-native';

interface Props {
  nombre: string;
  descripcion: string;
  detalle: string;
}

export default function TarjetaHobby({
  nombre,
  descripcion,
  detalle
}: Props) {
  return (
    <Pressable
      style={styles.tarjeta}
      onPress={() => Alert.alert(nombre, detalle)}
    >
      <Text style={styles.titulo}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Text style={styles.indicacion}>Toca para conocer más</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  descripcion: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
  indicacion: {
    fontSize: 12,
    color: '#7C3AED',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
