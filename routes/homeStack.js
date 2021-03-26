import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home.js";
import ReviewDetails from "../screens/reviewDetails.js";
import Header from "../shared/header.js";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: () => (
          <Header navigation={navigation} title="Movie Review" />
        ),
      })}
    >
      <Stack.Screen name="Movie Review" component={Home} />
      <Stack.Screen name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
}
