import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.contenedor}>

        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Text style={styles.iniciales}>EG</Text>
          </View>

          <Text style={styles.nombre}>
            Edwar Julián García Bernate
          </Text>

          <Text style={styles.titulacion}>
            Tecnólogo en Análisis y Desarrollo de Software
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Sobre mí</Text>

          <Text style={styles.descripcion}>
            Aprendiz SENA en Análisis y Desarrollo de
            Software, con interés en el desarrollo web,
            programación y administración de bases de datos.
            Me caracterizo por el trabajo en equipo,
            pensamiento lógico y compromiso con el aprendizaje.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Conocimientos</Text>

          <Text style={styles.descripcion}>
            Python, JavaScript, TypeScript, React,
            HTML, CSS, MySQL, PostgreSQL y MongoDB.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Contacto</Text>

          <MiBoton
            titulo="Enviar correo"
            mensaje="Puedes agregar aquí tu correo electrónico."
          />

          <MiBoton
            titulo="Llamar"
            mensaje="Puedes agregar aquí tu número de teléfono."
          />

          <MiBoton
            titulo="GitHub"
            mensaje="Consulta mis proyectos de desarrollo."
          />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  contenedor: {
    padding: 20,
  },
  perfil: {
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iniciales: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  nombre: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titulacion: {
    color: '#DBEAFE',
    textAlign: 'center',
    marginTop: 8,
  },
  seccion: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 12,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 15,
    color: '#444444',
    lineHeight: 23,
  },
});
