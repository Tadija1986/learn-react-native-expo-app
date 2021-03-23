import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import AddToDoItem from "./components/addToDoItem";

export default function App() {
  const [toDoList, setToDoList] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const pressHandler = (key) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.filter((toDoItem) => toDoItem.key !== key);
    });
  };
  const submitHandler = (text) => {
    setToDoList((prevToDoList) => {
      return [{ text: text, key: Math.random().toString() }, ...prevToDoList];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDoItem submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={toDoList}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  },
});
