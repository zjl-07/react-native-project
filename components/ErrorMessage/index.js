import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={35} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
