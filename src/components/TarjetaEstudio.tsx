
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  enCurso
}: TarjetaEstudioProps) {

  return (
    <View style={[
      styles.tarjeta,
      enCurso && styles.tarjetaEnCurso
    ]}>

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.institucion}>
        {institucion}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
      </Text>

      {enCurso && (
        <View style={styles.insignia}>
          <Text style={styles.textoInsignia}>
            En Curso
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  tarjetaEnCurso: {
    backgroundColor: '#EDE9FE',
    borderColor: '#8B5CF6',
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },

  institucion: {
    fontSize: 15,
    color: '#444444',
    marginTop: 6,
  },

  periodo: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
  },

  insignia: {
    backgroundColor: '#7C3AED',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  textoInsignia: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
