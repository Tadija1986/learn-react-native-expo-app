import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Wonder Woman 1984", rating: 4, genre: "Adventure", key: "1" },
    { title: "Godzilla vs. Kong", rating: 3, genre: "Sci-Fi", key: "2" },
    { title: "Mortal Kombat", rating: 5, genre: "Action", key: "3" },
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setShowModal(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={showModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setShowModal(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setShowModal(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review Details", { item: item })
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    alignSelf: "flex-end",
  },
});
