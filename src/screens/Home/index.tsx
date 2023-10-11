import React from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Jean Lincoln",
    "Sarah Souza",
    "Felipe Gamarano",
    "Joao Paulo",
    "Joao Victor",
    "Ana Paula",
    "Ana Luiza",
    "Lucas Castanheira",
    "Thatiana Ventura",
    "Franciele Cristina",
  ];

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

      <FlatList
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém Chegou no evento ainda? Adicione participantes a sua lista
            presença!
          </Text>
        )}
      />
    </View>
  );
}
