import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import ProductList from "components/ProductList";
import LatestNews from "components/LatestNews";
import PreBook from "components/PreBook";

import {
  NEWS_SECTION,
  PRODUCT_LIST,
  SUB_PRODUCT_LIST,
  CATEGORIES,
  CATEGORIES_DATA,
} from "datasource/homeScreens";

import styles from "./styles";

const latestNewsProps = {
  data: NEWS_SECTION,
  title: "The Latest from Hiyahiya",
  subTitle: "Stay informed form our latest update",
};

const preBookProps = {
  title: "Book Now, Use Later",
  data: CATEGORIES_DATA,
  categories: CATEGORIES,
};

export default function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProductList mainProduct={PRODUCT_LIST} subProduct={SUB_PRODUCT_LIST} />
      <LatestNews
        handleNavigation={() => navigation.navigate("News", latestNewsProps)}
        {...latestNewsProps}
      />
      <PreBook
        handleNavigation={() => navigation.navigate("PreBook", preBookProps)}
        {...preBookProps}
      />
    </ScrollView>
  );
}
