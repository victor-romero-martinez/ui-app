import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import ViewHistory from "./ViewHistory";
import { history } from "../db/history";

// limitar cantidad a renderizar
const Render = history.slice(0, 4);

const CardHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={st.container}>
      {Render.map((item) => (
        <ViewHistory key={item.id} item={item} />
      ))}
      <TouchableOpacity
        onPress={() => navigation.navigate("HistoryScreen")}
        style={st.txtIcon}
      >
        <Text style={st.txt}>Movimientos</Text>
        <FontAwesome5 name="exchange-alt" size={16} color="#007acc" />
      </TouchableOpacity>
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
    paddingRight: 8,
    color: "#007acc",
  },
});
