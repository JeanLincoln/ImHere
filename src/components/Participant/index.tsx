import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type User = {
  name: string;
};

export function Participant({ name }: User) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
