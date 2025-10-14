// index.js

import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
const Index = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleReload = () => {
    setLoading(true);
    setLoaded(false);

    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleReload}>
        <Icon name="reload" size={30} color="#007AFF" />
        <Text style={styles.buttonText}>Recargar</Text>
      </Pressable>

      <View style={styles.statusContainer}>
        {loading && (
          <ActivityIndicator size="large" color="#007AFF" />
        )}
        {!loading && loaded && (
          <Text style={styles.successText}>Cargado con éxito</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    marginTop: 5,
    color: '#007AFF',
    fontSize: 16
  },
  statusContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  successText: {
    fontSize: 16,
    color: 'green'
  }
});

