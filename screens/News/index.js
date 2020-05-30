import React from "react";
import { Text, TouchableOpacity, Image, ScrollView, View } from "react-native";

import styles from "./styles";

export default function News({ route: { params } }) {
  const { title, data, subTitle } = params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {data.map(({ title, desc, imagePath }) => (
        <TouchableOpacity key={title} style={styles.newsContainer}>
          <Image source={{ uri: imagePath }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>{title}</Text>
          <Text style={styles.subTitle}>{desc}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
