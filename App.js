import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Home from "screens/Home";
import Dummy from "screens/Dummy";
import News from "screens/News";
import PreBook from "screens/PreBook";

import { color } from "utils/globalStyles";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={homeHeaderStyles}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Dummy" component={Dummy} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="PreBook" component={PreBook} />
  </Stack.Navigator>
);

const tabStyles = ({ route: { name } }) => ({
  tabBarIcon: ({ color }) => (
    <FontAwesome
      name={name.toLowerCase()}
      size={30}
      color={color}
      style={{ paddingTop: 8 }}
    />
  ),
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={tabStyles}
        tabBarOptions={{
          activeTintColor: color.tomato,
          inactiveTintColor: color.darkgrey,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="History" component={Dummy} />
        <Tab.Screen name="Inbox" component={Dummy} />
        <Tab.Screen name="User" component={Dummy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
