import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about.js";
import Header from "../shared/header.js";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: () => (
          <Header navigation={navigation} title="About Movie Review" />
        ),
      })}
    >
      <Stack.Screen name="About Movie Review" component={About} />
    </Stack.Navigator>
  );
}
