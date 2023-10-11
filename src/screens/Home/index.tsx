import React from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const handleParticipantAdd = () => {
    console.log("voce clicou no botao de adicionar");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`voce clicou em remover o participamnte ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Jean Lincoln"
        onRemove={() => handleParticipantRemove("Jean Lincoln")}
      />
      <Participant
        name="Sarah Souza"
        onRemove={() => handleParticipantRemove("Sarah Souza")}
      />
      <Participant
        name="Felipe Gamarano"
        onRemove={() => handleParticipantRemove("Felipe Gamarano")}
      />
      <Participant
        name="Joao Paulo"
        onRemove={() => handleParticipantRemove("Joao Paulo")}
      />
    </View>
  );
}
