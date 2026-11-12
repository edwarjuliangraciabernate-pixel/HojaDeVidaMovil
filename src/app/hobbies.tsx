
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView style={styles.fondo}>
      <Text style={styles.encabezado}>Mis intereses y hobbies</Text>

      <TarjetaHobby
        nombre="Fútbol"
        descripcion="Me gusta practicar fútbol y mejorar mis habilidades."
        detalle="El fútbol es uno de mis pasatiempos favoritos. Me permite desarrollar disciplina, trabajo en equipo y condición física."
      />

      <TarjetaHobby
        nombre="Entrenamiento en gimnasio"
        descripcion="Me interesa el ejercicio y el desarrollo físico."
        detalle="Disfruto entrenar en el gimnasio, trabajar mi fuerza y mantener una rutina de ejercicio."
      />

      <TarjetaHobby
        nombre="Programación"
        descripcion="Me gusta aprender nuevas tecnologías."
        detalle="Me interesa desarrollar aplicaciones, explorar lenguajes de programación y crear proyectos propios."
      />

      <TarjetaHobby
        nombre="Música"
        descripcion="Disfruto escuchar música en mi tiempo libre."
        detalle="La música es una de mis formas favoritas de entretenimiento y expresión."
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
