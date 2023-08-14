import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";

export default function BoxButton() {
  const navigation = useNavigation();

  // navegacion a pantalla en progreso
  const progress = () => {
    navigation.navigate("inprogress");
  };

  return (
    <View style={st.container}>
      <View>
        <View style={st.iconContainer}>
          <TouchableOpacity
            style={[st.icon, { backgroundColor: "#f1be32" }]}
            onPress={progress}
          >
            <Button name="qrcode" size={40} />
          </TouchableOpacity>
          <Text style={st.txt}>Pago Qr</Text>
        </View>
        <View style={st.iconContainer}>
          <TouchableOpacity style={[st.icon, st.elevation]} onPress={progress}>
            <Button name="chart-line" size={40} />
          </TouchableOpacity>
          <Text style={st.txt}>Inversiones</Text>
        </View>
      </View>
      <View>
        <View style={st.iconContainer}>
          <TouchableOpacity style={st.icon} onPress={progress}>
            <Button name="file-invoice-dollar" size={40} />
          </TouchableOpacity>
          <Text style={st.txt}>Pago de factura</Text>
        </View>
        <View style={st.iconContainer}>
          <TouchableOpacity style={st.icon} onPress={progress}>
            <Button name="amazon-pay" size={40} />
          </TouchableOpacity>
          <Text style={st.txt}>Servicios</Text>
        </View>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: 200,
    marginTop: 18,
    backgroundColor: "#fbf2f3",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    elevation: 3,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 140,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    elevation: 3,
    borderRadius: 10,
  },
  txt: {
    textAlign: "center",
  },
});
