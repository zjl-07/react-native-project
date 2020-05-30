import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View } from "react-native";

import Home from "screens/Home";
import News from "screens/News";
import PreBook from "screens/PreBook";

import { color } from "utils/globalStyles";
import { Stack, Drawer } from "utils/navigator";

const homeHeaderStyles = ({ navigation }) => ({
  title: "Hiyahiya",
  headerLeft: () => (
    <FontAwesome
      name="heartbeat"
      size={30}
      color={color.lightgrey}
      onPress={() => navigation.navigate("Home")}
    />
  ),
  headerRight: () => (
    <Entypo
      name="dots-three-vertical"
      size={30}
      color={color.lightgrey}
      onPress={() => navigation.toggleDrawer()}
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

const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={homeHeaderStyles}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="PreBook" component={PreBook} />
    </Stack.Navigator>
  );
};

const DrawerContent = ({ ...rest }) => (
  <DrawerContentScrollView {...rest}>
    <View>
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
      <DrawerItem label="Settings" onPress={() => alert("Link to Settings")} />
      <DrawerItem label="Log Out" onPress={() => alert("Link to Log Out")} />
    </View>
  </DrawerContentScrollView>
);

export default function HomeNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerPosition="right"
    >
      <Drawer.Screen name="Home" component={HomeScreenStack} />
    </Drawer.Navigator>
  );
}
