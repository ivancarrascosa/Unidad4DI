// App.js o index.js

import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
} from 'react-native';

const Index = () => {
  const [translucent, setTranslucent] = useState(true);

  const toggleBar = () => {
    setTranslucent(!translucent);
  };

  return (
<View style={[
  styles.container,
  { backgroundColor: translucent ? '#6200EE' : '#FFEB3B' }
]}>  
    <StatusBar
  backgroundColor={translucent ? 'rgba(0,0,0,0.3)' : '#333'}
  barStyle={translucent ? 'light-content' : 'dark-content'}
/>


      <Text style={styles.title}>
        Barra {translucent ? 'Translúcida' : 'No Translúcida'}
      </Text>

      <Pressable style={styles.button} onPress={toggleBar}>
        <Text style={styles.buttonText}>Cambiar barra</Text>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});
