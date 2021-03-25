import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home.js";
import About from "./screens/about.js";
import ReviewDetails from "./screens/reviewDetails.js";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: "yellow",
//   },
//   list: {
//     flex: 1,
//     marginTop: 40,
//     backgroundColor: "lightgreen",
//   },
// });

// import Header from "./components/header";
// import ToDoItem from "./components/todoItem";
// import AddToDoItem from "./components/addToDoItem";
// import Sandbox from "./components/sandbox";

// export default function App() {
//   const [toDoList, setToDoList] = useState([
//     { text: "buy coffee", key: "1" },
//     { text: "create app", key: "2" },
//     { text: "play on the switch", key: "3" },
//   ]);
//   const pressHandler = (key) => {
//     setToDoList((prevToDoList) => {
//       return prevToDoList.filter((toDoItem) => toDoItem.key !== key);
//     });
//   };
//   const submitHandler = (text) => {
//     if (text.length > 3) {
//       setToDoList((prevToDoList) => {
//         return [{ text: text, key: Math.random().toString() }, ...prevToDoList];
//       });
//     } else {
//       Alert.alert("Alert", "To do item must be minimum 3 chars.", [
//         {
//           text: "Ok",
//           onPress: () => console.log("Alert closed"),
//         },
//       ]);
//     }
//   };
//   return (
//     // <Sandbox />
//     <TouchableWithoutFeedback
//       onPress={() => {
//         Keyboard.dismiss();
//       }}
//     >
//       <View style={styles.container}>
//         <Header />
//         <View style={styles.content}>
//           <AddToDoItem submitHandler={submitHandler} />
//           <View style={styles.list}>
//             <FlatList
//               data={toDoList}
//               renderItem={({ item }) => (
//                 <ToDoItem item={item} pressHandler={pressHandler} />
//               )}
//             />
//           </View>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: "yellow",
//   },
//   list: {
//     flex: 1,
//     marginTop: 40,
//     backgroundColor: "lightgreen",
//   },
// });
