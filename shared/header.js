import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/cinema.jpg")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={() => openMenu()}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={require("../assets/IMDb.png")} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginLeft: 5,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
