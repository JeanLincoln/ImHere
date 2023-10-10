import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 24,
  },

  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFCFE",
    marginTop: 48,
  },

  eventDate: { color: "black", fontSize: 20 },
});
