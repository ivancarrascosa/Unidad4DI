import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.card}>
      <Image style={styles.imagen} source={require('../assets/images/gato.jpg')}></Image>
      <Text style={styles.texto}>Una foto de un gato :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 20,
    marginTop: 30,
    maxWidth: '80%',
    minWidth: '50%',
    padding: 20
  },
  imagen: {
    height: 100,
    width: 100,
    borderRadius: 55,
  },
  texto: {
    fontWeight: 'bold',
    marginTop: 10
  }
})
