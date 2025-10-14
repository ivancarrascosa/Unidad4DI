import { Pressable, Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from 'react';

type PressableTextProps = {
  texto: string;
  style?: StyleProp<ViewStyle>;
};

function PressableText({ texto, style }: PressableTextProps) {
  return (
    <Pressable style = {style}>
      <Text>{texto}</Text>
    </Pressable>
  );
}

export default function Index() {
  return (
    <View>
    <PressableText texto = "Hola" style= {Styles.botones}/>
    <PressableText texto = "Estoy usando un componente" style= {Styles.botones}/>
    <PressableText texto = "Yo tambien soy un componente twin" style= {Styles.botones}/>
    <PressableText texto = "y yo" style= {Styles.botones}/>
    </View>
  );
}

const Styles = StyleSheet.create({
  botones: {
    margin: 10,
    borderWidth: 2,
    borderStyle: "solid" ,
    borderRadius: 10,
    alignItems: "center"
  },
}
)


