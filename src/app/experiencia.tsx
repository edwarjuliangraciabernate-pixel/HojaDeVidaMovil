
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView style={styles.fondo}>
      <Text style={styles.encabezado}>Mis proyectos</Text>

      <TarjetaExperiencia
        cargo="Sistema de gestión de nómina"
        empresa="Proyecto académico Buydrax"
        periodo="Proyecto SENA"
        descripcion="Desarrollo de una aplicación web para la gestión de empleados, proyectos, asistencia, horas extras y reportes utilizando React y TypeScript."
      />

      <TarjetaExperiencia
        cargo="Tienda deportiva"
        empresa="Proyecto académico SENA"
        periodo="Etapa lectiva"
        descripcion="Creación de una página web utilizando HTML y CSS para presentar productos deportivos."
      />

      <TarjetaExperiencia
        cargo="Sistema de supermercado"
        empresa="Proyecto académico SENA"
        periodo="Etapa lectiva"
        descripcion="Desarrollo de una página web para representar la estructura de un supermercado mediante HTML y CSS."
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
