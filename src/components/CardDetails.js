import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Clipboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import Button from "./Button";
import { saldo } from "../db/data";
const account = 520640;

// reemplazar
const secret = saldo
  .split("")
  .map((item) => item.replace(/\d/, "*"))
  .join("");

const CardDetails = () => {
  const [hide, setHide] = useState(false);
  const navigation = useNavigation();

  // copiar al clipboar
  const copyToClipboard = () => {
    Clipboard.setString(`N: ${account}`);
    ToastAndroid.show(`Copiado N: ${account}`, ToastAndroid.SHORT);
  };

  // cabiar presentacion
  const handelShow = () => {
    setHide((prev) => !prev);
  };

  // mostrar u ocultar dato
  const showHide = () => {
    if (hide) {
      return (
        <TouchableOpacity onPress={handelShow} style={st.grup}>
          <Text style={st.txt}>Gs. {secret}</Text>
          <Button name="eye" size={18} color="#2a2a40" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={handelShow} style={st.grup}>
          <Text style={st.txt}>Gs. {saldo}</Text>
          <Button name="eye-slash" size={18} color="#2a2a40" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={st.container}>
      <View>
        <Text style={[st.txt, { fontSize: 16 }]}>Cuenta</Text>
        <TouchableOpacity onPress={copyToClipboard} style={st.grup}>
          <Text style={st.txt}>N: {account}</Text>
          <Button name="copy" size={18} color="#2a2a40" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[st.txt, { fontSize: 16 }]}>Dinero diponible</Text>
        {showHide()}
        <TouchableOpacity onPress={() => navigation.navigate("inprogress")}>
          <Text style={st.details}>Ver mis datos</Text>
        </TouchableOpacity>
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
    elevation: 3,
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
    gap: 5,
  },
  details: {
    fontSize: 14,
    color: "#007acc",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});
