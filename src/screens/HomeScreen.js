import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";

import CardHistory from "../components/CardHistory";
import CardDetails from "../components/CardDetails";
import BoxButton from "../components/BoxButton";
const img = require("../assets/seagull-7282992_1280.png");

export default function HomeScreen() {
  return (
    <ImageBackground source={img} resizeMode="cover" style={st.background}>
      <View style={st.container}>
        <CardDetails />
        <CardHistory />
        <BoxButton />
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
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    margin: 12,
  },
});