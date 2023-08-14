import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

import { API } from "../db/data";
import store from "../store/store";

const img = require("../assets/seagull-7282992_1280.png");

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
    <ImageBackground source={img} resizeMode="cover" style={st.background}>
    <View style={st.container}>
    <FontAwesome5 name="react" size={80} color="black" style={st.logo} />
      <View style={st.formContainer}>
        <View style={st.inputContainer}>
          <Text style={st.inputLabel}>Email</Text>
          <TextInput
            placeholder="example@example.com"
            maxLength={80}
            inputMode="email"
            keyboardType="email-address"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View style={st.inputContainer}>
          <Text style={[st.inputLabel, { width: 100 }]}>Contraseña</Text>
          <TextInput
            placeholder="Contraseña"
            maxLength={80}
            secureTextEntry
            inputMode="text"
            keyboardType="default"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <Text style={st.recover}>Olvidé mi contraseña</Text>
        <TouchableOpacity
          style={st.btn}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={st.txtBtn}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5, marginTop: 50 }}>
          <Text>¿No tienes una cuenta?</Text>
          <Text style={{ color: "#007acc" }}>Crear ahora</Text>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const st = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    marginTop: -50,
  },
  logo: {
    width: '100%',
    marginTop: 60,
    textAlign: 'center'
  },
  formContainer: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  textLG: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
    height: 50,
    padding: 4,
    marginVertical: 10,
    borderRadius: 10,
    color: "#fff",
    borderColor: "#2a2a40",
    borderWidth: 1,
  },
  inputLabel: {
    width: 60,
    marginTop: -15,
    marginLeft: 5,
    color: "#2a2a40",
    backgroundColor: "#f1be32",
    textAlign: "center",
    borderRadius: 10,
  },
  recover: {
    width: "80%",
    textAlign: "right",
    paddingHorizontal: 10,
    color: "#007acc",
    marginTop: -5,
  },
  btn: {
    height: 40,
    width: 120,
    padding: 4,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f1be32",
  },
  txtBtn: {
    fontSize: 24,
    color: "#2a2a40",
    textAlign: "center",
  },
});
