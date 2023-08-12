import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import store from "../store/store";
import TableData from "../components/TableData";
import { AntDesign } from "@expo/vector-icons";

const img = require("../assets/seagull-7282992_1280.png");

export default function Profile() {
  const { user } = store.getState();

  const { name, email, location, dob, cell, picture, login } = user[0];

  const dateDOB = new Date(dob.date).toLocaleDateString();

  return (
    <ImageBackground source={img} resizeMode="cover" style={st.background}>
      <View style={st.container}>
        <View style={st.imgContainer}>
          <Image source={{ uri: picture.large }} style={st.img} />
          <Text style={st.name}>{login.username}</Text>
        </View>
        <Text style={st.txtTitle}>Mis Datos</Text>
        <View style={st.dataContainer}>
          <TableData data="Nombre" field={name.first} />
          <TableData data="Apellido" field={name.last} />
          <TableData data="F. nacimiento" field={dateDOB} />
          <TableData data="Email" field={email} />
          <TableData data="N. Cel" field={cell} />
          <TableData data="Domicilio" field={location.street.name} />
          <TableData data="Ciudad" field={location.city} />
          <TableData data="Estado" field={location.state} />
          <TableData data="Pais" field={location.country} />
        </View>
        <View style={st.iconShare}>
          <AntDesign name="sharealt" size={40} color="#2a2a40" />
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
    margin: 10,
    paddingVertical: 10,
  },
  imgContainer: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 3,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  dataContainer: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    elevation: 3,
  },
  iconShare: {
    alignItems: 'center',
    marginTop: 80
  },
});
