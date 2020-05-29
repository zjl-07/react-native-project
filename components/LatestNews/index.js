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

import styles from "./styles";

export default function LatestNews({
  data,
  title,
  subTitle,
  handleNavigation,
}) {
  return (
    <View style={styles.latestNewsContainer}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.inline}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <FontAwesome name="chevron-right" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
        {data.map(({ title, desc, imagePath }, idx) => (
          <TouchableOpacity
            key={title}
            style={idx !== data.length - 1 && styles.paddingLeft}
          >
            <Image source={imagePath} style={styles.newsContainer} />
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.subTitle}>{desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
