import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import ViewHistory from "./ViewHistory";
import { history } from "../db/history";

// limitar cantidad a renderizar
const Render = history.slice(0, 4);

const CardHistory = () => {
  return (
    <View style={st.container}>
      {Render.map((item) => (
        <ViewHistory key={item.id} item={item} />
      ))}
      <View style={st.txtIcon}>
        <Text style={st.txt}>Movimiento</Text>
        <FontAwesome5 name="exchange-alt" size={16} color="#007acc" />
      </View>
    </View>
  );
};
export default CardHistory;

const st = StyleSheet.create({
  container: {
    width: "90%",
    height: 200,
    marginTop: 18,
    backgroundColor: "#fbf2f3",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    elevation: 3,
  },
  txtIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontWeight: "bold",
    paddingRight: 5,
    color: "#007acc",
  },
});
