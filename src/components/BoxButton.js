import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

export default function BoxButton() {
  return (
    <View style={st.container}>
      <View>
        <View style={st.iconContainer}>
          <View style={[st.icon, { backgroundColor: "#f1be32" }]}>
            <Button name="qrcode" size={40} screenChange="inprogress" />
          </View>
          <Text style={st.txt}>Pago Qr</Text>
        </View>
        <View style={st.iconContainer}>
          <View style={[st.icon, st.elevation]}>
            <Button name="chart-line" size={40} screenChange="inprogress" />
          </View>
          <Text style={st.txt}>Inversiones</Text>
        </View>
      </View>
      <View>
        <View style={st.iconContainer}>
          <View style={st.icon}>
            <Button
              name="file-invoice-dollar"
              size={40}
              screenChange="inprogress"
            />
          </View>
          <Text style={st.txt}>Pago de factura</Text>
        </View>
        <View style={st.iconContainer}>
          <View style={st.icon}>
            <Button name="amazon-pay" size={40} screenChange="inprogress" />
          </View>
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
