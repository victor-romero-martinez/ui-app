import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function InProgress() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>InProgress :(</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976d2",
  },
  txt: {
    fontSize: 40,
    color: "#ffffff",
  },
});
