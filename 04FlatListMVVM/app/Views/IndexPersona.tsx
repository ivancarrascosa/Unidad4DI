import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IndexVM } from "../ViewModels/IndexVM";

const ViewModel = new IndexVM;
export default function IndexPersona() {

  return (
    <FlatList
      data = {ViewModel.personas}
      keyExtractor={(persona) => persona.id.toString()}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => ViewModel.personaSeleccionada = item}>
        <View style = {styles.container}>
          <Text style = {styles.people}>{item.Nombre} {item.Apellidos}</Text>
        </View>
        </TouchableOpacity>
      )}>
        
      </FlatList>
      )
    }

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"
    },

    people: {
      padding: 10,
      fontSize: 20,
      borderStyle: "solid",
      borderWidth: 2,
      margin: 5,
      borderRadius: 20,
      width: "40%",
      textAlign: "center",
    },
    detalles: {
      marginTop: 12,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: '#f0f0f0',
    },
    detalleTexto: {
      fontSize: 14,
      color: '#666',
      marginBottom: 4,
    },
})