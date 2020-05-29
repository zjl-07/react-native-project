import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

import styles from "./styles";

const INITIAL_CATEGORY = "entertainment";
export default function PreBook({ route: { params } }) {
  const [activeCategories, setCategories] = useState(INITIAL_CATEGORY);
  const { data, categories, title } = params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
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
      <View style={styles.itemContainer}>
        {categories[activeCategories].map((item) => (
          <TouchableOpacity key={item} style={styles.itemContainer}>
            <Image source={item} style={styles.preBookItem} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
