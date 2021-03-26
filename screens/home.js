import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Wonder Woman 1984", rating: 4, genre: "Adventure", key: "1" },
    { title: "Godzilla vs. Kong", rating: 3, genre: "Sci-Fi", key: "2" },
    { title: "Mortal Kombat", rating: 5, genre: "Action", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review Details", { item: item })
            }
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
