import { View, Text, StyleSheet } from "react-native";

export default function HeaderTitle({ name }) {

  return (
    <View style={st.container}>
      <Text style={st.txt}>Hola, </Text>
      <Text style={[st.txt, { fontWeight: "bold" }]}>{name}</Text>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 20,
  },
});
