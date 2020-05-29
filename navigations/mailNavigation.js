import React from "react";

import Dummy from "screens/Dummy";

import { color } from "utils/globalStyles";
import { Stack } from "utils/navigator";

const headerStyles = ({ navigation }) => ({
  title: "Inbox",
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

export default function InboxNavigation() {
  return (
    <Stack.Navigator screenOptions={headerStyles}>
      <Stack.Screen name="Dummy" component={Dummy} />
    </Stack.Navigator>
  );
}
