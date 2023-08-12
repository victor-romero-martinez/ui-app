import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const img = require("../assets/seagull-7282992_1280.png");

const About = () => {
  return (
    <ImageBackground source={img} resizeMode="cover" style={st.background}>
      <View style={st.container}>
        <Fontisto name="laboratory" size={50} color="#2a2a40" />
        <Text style={st.txt}>App de prueba hecha con Expo, React Native</Text>
        <Text style={st.txt}>Version: 0.1</Text>
      </View>
    </ImageBackground>
  );
};

const st = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  txt: {
    fontSize: 16,
    paddingTop: 30,
  },
});

export default About;
