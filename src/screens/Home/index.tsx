import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      Alert.alert(
        "Participante",
        "Ja existe um participante com este nome na lista"
      );

      return;
    }

    setParticipants((state) => [...state, participantName]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name: string) => {
    const deleteParticipant = participants.filter(
      (participant) => participant !== name
    );

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants(deleteParticipant);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setParticipantName}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
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
