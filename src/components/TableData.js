import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TableData({ data, field }) {
  return (
    <View style={st.container}>
      <View style={st.block}>
        <Text style={[st.txt, { fontWeight: "bold" }]}>{data}:</Text>
      </View>
      <View>
        <Text style={st.txt}>{field}</Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    marginLeft: 5
  },
  txt: {
    fontSize: 16,
    textAlign: "left",
  },
  block: {
    width: 108
  },
});
