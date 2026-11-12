
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView style={styles.fondo}>
      <Text style={styles.encabezado}>Mi formación académica</Text>

      <TarjetaEstudio
        titulo="Análisis y Desarrollo de Software"
        institucion="SENA"
        periodo="Diciembre 2025 - Julio 2027"
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="English Does Work - Niveles 4, 5 y 6"
        institucion="Smart Academia de Inglés"
        periodo="En formación"
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Bachillerato técnico"
        institucion="Formación académica anterior"
        periodo="Finalizado"
        enCurso={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 18,
  },
  encabezado: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 15,
    marginTop: 10,
  },
});
