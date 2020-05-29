import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import Home from "screens/Home";
import News from "screens/News";
import PreBook from "screens/PreBook";

import { color } from "utils/globalStyles";
import { Stack } from "utils/navigator";

const homeHeaderStyles = ({ navigation }) => ({
  title: "Hiyahiya",
  headerLeft: () => (
    <FontAwesome
      name="heartbeat"
      size={32}
      color={color.lightgrey}
      onPress={() => navigation.navigate("Home")}
    />
  ),
  headerStyle: {
    backgroundColor: color.red,
  },
  headerTintColor: color.lightgrey,
  headerTitleAlign: "center",
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerRightContainerStyle: {
    paddingRight: 20,
  },
});

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={homeHeaderStyles}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="PreBook" component={PreBook} />
    </Stack.Navigator>
  );
}
