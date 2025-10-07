import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Index = () => {

  // Hook para el contador
  const [count, setCount] = useState(0);
  
  // Hook para los clicks
  const[clicks, setClicks] = useState(1);

  function handlePress(num: number): void{
    setClicks(clicks + 1)
    if (num == 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    if (clicks % 10 == 0) {
      alert("Enhorabuena, has hecho " + clicks + " clicks");
    }
  }

  

  const decrementar = () => {
    setCount(count - 1);
    setClicks(clicks + 1);
  };
  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>
      <Pressable onPress={() => handlePress(0)} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      <Pressable onPress={() => handlePress(1)} style={styles.button}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;