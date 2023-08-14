import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { saldo } from "../db/data";
import { history } from "../db/history";
import ViewHistory from "../components/ViewHistory";

const img = require("../assets/seagull-7282992_1280.png");

export default function HistoryScreen() {
  const [txtInput, setTxtInput] = useState("");

  return (
    <ImageBackground source={img} resizeMode="cover" style={st.background}>
      <View style={st.container}>
        <View style={st.headerContainer}>
          <View style={st.title}>
            <Text style={st.txtLG}>Dinero disponible</Text>
            <Text style={st.txtXL}>Gs. {saldo}</Text>
          </View>
          <TouchableOpacity style={st.downloadBtn}>
            <Text style={[st.txtSM, { color: "#fff" }]}>
              Descargar extracto
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Buscar por nombre"
            onChange={setTxtInput}
            value={txtInput}
            maxLength={38}
            inputMode="search"
            cursorColor={"#2a2040"}
            style={st.search}
          />
        </View>
        <View style={st.scrollBox}>
          <ScrollView
            style={st.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {history.map((item) => (
              <ViewHistory item={item} key={item.id} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const st = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    padding: 6,
    alignItems: "center",
  },
  txtLG: {
    fontSize: 14,
  },
  txtXL: {
    fontSize: 28,
    fontWeight: "bold",
  },
  txtSM: {
    fontSize: 12,
  },
  downloadBtn: {
    paddingHorizontal: 10,
    backgroundColor: "#007acc",
    borderRadius: 10,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    marginBottom: 15,
  },
  search: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    padding: 5,
    marginTop: 25,
    elevation: 2,
  },
  scrollBox: {
    height: 610,
    width: "95%",
  },
  scrollContainer: {
    margin: 15,
  },
});
