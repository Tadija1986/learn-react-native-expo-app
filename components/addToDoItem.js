import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddToDoItem({ submitHandler }) {
  const [text, setText] = useState("");
  const changeText = (value) => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new to do item"
        onChangeText={changeText}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add To Do Item"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
