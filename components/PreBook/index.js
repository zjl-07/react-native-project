import React, { useState } from "react";
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

export default function PreBook({ data, categories, title, handleNavigation }) {
  const [activeCategories, setCategories] = useState("entertainment");

  return (
    <View style={styles.preBookingContainer}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.inline}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <FontAwesome name="chevron-right" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.categoriesContainer}>
        {data.map((item) => (
          <TouchableOpacity
            style={styles.categoriesItem}
            key={item}
            onPress={() => setCategories(item)}
          >
            <Text style={styles.categoriesTitle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
        {categories[activeCategories].map((item, idx) => (
          <TouchableOpacity
            style={idx !== item.length - 1 && styles.marginRight}
            key={item}
          >
            <Image source={item} style={styles.preBookItem} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
