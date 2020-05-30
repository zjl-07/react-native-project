import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function LatestNews({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.latestNewsContainer}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("News", {
            data,
            title: "The Latest from Hiyahiya",
            subTitle: "Stay informed form our latest update",
          })
        }
      >
        <View style={styles.inline}>
          <Text style={styles.sectionTitle}>The Latest from Hiyahiya</Text>
          <FontAwesome name="chevron-right" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.subTitle}>Stay informed form our latest update</Text>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
        {data.map(({ title, desc, imagePath }, idx) => (
          <TouchableOpacity
            key={title}
            style={idx !== data.length - 1 && styles.paddingLeft}
          >
            <Image source={{ uri: imagePath }} style={styles.newsContainer} />
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.subTitle}>{desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
