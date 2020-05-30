import React, { useState, useCallback } from "react";
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

const INITIAL_CATEGORY = "entertainment";

function PreBook({ data }) {
  const navigation = useNavigation();
  const [activeCategories, setCategories] = useState(INITIAL_CATEGORY);
  const categories = Object.keys(data);

  const handleNavigation = useCallback(
    () =>
      navigation.navigate("PreBook", {
        data,
        categories,
        title: "Book Now, Use Later",
      }),
    []
  );

  return (
    <View style={styles.preBookingContainer}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.inline}>
          <Text style={styles.sectionTitle}>Book Now, Use Later</Text>
          <FontAwesome name="chevron-right" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.categoriesContainer}>
        {categories.map((item) => (
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
        {data[activeCategories] &&
          data[activeCategories].map((item, idx) => (
            <TouchableOpacity
              style={idx !== item.length - 1 && styles.marginRight}
              key={item}
            >
              <Image source={{ uri: item }} style={styles.preBookItem} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

export default React.memo(PreBook);
