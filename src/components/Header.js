import { View, StyleSheet } from "react-native";
import Button from "./Button";
import HeaderPictureProfile from "./HeaderPictureProfile";
import HeaderTitle from "./HeaderTitle";

import store from "../store/store";

export default function Header() {
  const user = store.getState().user;

  return (
    <View style={st.container}>
      <View style={st.left}>
        <View>
          {user ? (
            <HeaderPictureProfile picture={user[0]?.picture.medium} />
          ) : (
            <HeaderPictureProfile picture="" />
          )}
        </View>
        <View>
          {user ? (
            <HeaderTitle name={user[0]?.login.username} />
          ) : (
            <HeaderTitle name="Invitad@" />
          )}
        </View>
      </View>
      <Button name="question-circle" size={24} screenChange="About" />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    right: 15,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
