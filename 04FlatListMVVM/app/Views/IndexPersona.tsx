import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IndexVM } from "../ViewModels/IndexVM";


export default function IndexPersona() {
  const [, forceUpdate] = useState({});
  const viewModel = useMemo(() => IndexVM.getInstance(), []);

  const handlePress = (id: number) => {
    viewModel.toggleExpanded(id);
    forceUpdate({});
  };

  return (
    <FlatList
      data={viewModel.getPersonas()}
      keyExtractor={(persona) => persona.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <View style={styles.container}>
            <Text style={styles.people}>
              {viewModel.getPersonaFullName(item)}
            </Text>
            
            {viewModel.isExpanded(item.id) && (
              <View style={styles.detalles}>
                {viewModel.getPersonaDetails(item).map((detail, index) => (
                  <Text key={index} style={styles.detalleTexto}>
                    {detail}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
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