import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { color } from "utils/globalStyles";

import styles from "./styles";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color.black} />
      <Text style={styles.text}>Loading.. Please wait a minutes..</Text>
    </View>
  );
}
