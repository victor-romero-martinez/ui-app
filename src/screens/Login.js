import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

import { API } from "../db/data";
import store from "../store/store";

export default function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  // fetching
  async function getData() {
    try {
      const response = await fetch(API);
      const { results } = await response.json();
      store.dispatch({ type: "SET_USER", payload: results });
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <View style={st.container}>
      <Pressable onPress={() => navigation.navigate("StackScreen")}>
        <Text style={st.btn}>Login</Text>
      </Pressable>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#2a2a2a",
    padding: 10,
    borderRadius: 10,
  },
});
