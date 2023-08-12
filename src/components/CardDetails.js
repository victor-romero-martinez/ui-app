import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


const account = 520640;
const saldo = 45000;

const CardDetails = () => {
  return (
    <View style={st.container}>
      <View>
        <Text style={[st.txt, { fontSize: 16 }]}>Cuenta</Text>
        <View style={st.grup}>
          <Text style={st.txt}>N:{account}</Text>
          <FontAwesome5 name="copy" size={18} color="#2a2a40" />
        </View>
      </View>
      <View>
        <Text style={[st.txt, { fontSize: 16 }]}>Saldo diponible</Text>
        <View style={st.grup}>
          <Text style={st.txt}>Gs.{saldo}</Text>
          <FontAwesome5 name="eye-slash" size={18} color="#2a2a40" />
        </View>
        <Text style={st.details}>Ver mis datos</Text>
      </View>
    </View>
  );
};

export default CardDetails;

const st = StyleSheet.create({
  container: {
    width: "90%",
    height: 150,
    backgroundColor: "#fbf2f3",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    elevation: 3
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 5,
  },
  grup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    fontSize: 14,
    color: "#007acc",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});
