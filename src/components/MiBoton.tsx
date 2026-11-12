
import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

interface MiBotonProps {
  titulo: string;
  mensaje: string;
}

export default function MiBoton({
  titulo,
  mensaje
}: MiBotonProps) {

  const manejarPresion = () => {
    Alert.alert(titulo, mensaje);
  };

  return (
    <Pressable
      style={styles.boton}
      onPress={manejarPresion}
    >
      <Text style={styles.texto}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#1E3A8A',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
