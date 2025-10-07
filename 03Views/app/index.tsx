import { CurrentRenderContext } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}><Text>Header</Text></View>
      <View style = {styles.centralContainer}>
        <View style = {styles.left}></View>
        <View style={styles.central}><Text>Content</Text></View>
        <View style={styles.right}>

        </View>
      </View>
      <View style={styles.footer}><Text>Footer</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
    
  },
  header: {
    height: "10%",
    backgroundColor: "blue",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex"
  },
  centralContainer: {
    height: "80%",
    display: "flex"
  },
  left: {
    width: "10%",
    height: "100%",
    backgroundColor: "cyan",
  },
  central: {
    width: "80%",
    height: "100%",
    backgroundColor: "grey",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex"
  },
  right: {
    width: "10%",
    height: "100%",
    backgroundColor: "green",
  },
  footer: {
    height: "10%",
    backgroundColor: "pink",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex"
  }
});