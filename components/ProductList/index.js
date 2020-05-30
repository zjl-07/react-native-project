import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const handlePress = (val) => alert(`You just press ${val}`);

const renderProductList = (data) =>
  data.map(({ name, path }) => (
    <TouchableOpacity
      key={name}
      style={styles.productItem}
      onPress={handlePress.bind(this, name)}
    >
      <Image source={path} style={styles.image} />
      <Text>{name}</Text>
    </TouchableOpacity>
  ));

const renderSubProductList = (data) =>
  data.map(({ name, icon }) => (
    <TouchableOpacity
      key={name}
      style={styles.SubProductItem}
      onPress={handlePress.bind(this, name)}
    >
      <FontAwesome name={icon} size={20} style={styles.subProductImage} />
      <Text style={styles.productTitle}>{name}</Text>
    </TouchableOpacity>
  ));

function ProductList({ mainProduct, subProduct }) {
  return (
    <>
      <View style={styles.productContainer}>
        {renderProductList(mainProduct)}
      </View>
      <ScrollView directionalLockEnabled={false} horizontal={true}>
        <View style={styles.subProductContainer}>
          {renderSubProductList(subProduct)}
        </View>
      </ScrollView>
    </>
  );
}

export default React.memo(ProductList);
