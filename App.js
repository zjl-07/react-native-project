import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from "react-redux";

import HomeNavigation from "navigations/homeNavigation";
import HistoryNavigation from "navigations/historyNavigation";
import MailNavigation from "navigations/mailNavigation";
import UserNavigation from "navigations/userNavigation";

import { color } from "utils/globalStyles";
import { Tab } from "utils/navigator";

import store from "datasource/store";

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
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={tabStyles}
          tabBarOptions={{
            activeTintColor: color.tomato,
            inactiveTintColor: color.darkgrey,
          }}
        >
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="History" component={HistoryNavigation} />
          <Tab.Screen name="Inbox" component={MailNavigation} />
          <Tab.Screen name="User" component={UserNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
