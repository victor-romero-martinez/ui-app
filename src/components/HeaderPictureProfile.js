import { StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "./Button";

export default function HeaderPictureProfile({ picture }) {
  const navigation = useNavigation();

  return (
    <View style={st.container}>
      {picture ? (
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image
            style={st.img}
            source={{
              uri: picture,
            }}
          />
        </Pressable>
      ) : (
        <Button name="user" size={24} screenChange="Profile" />
      )}
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'center',
    borderColor: '#fff',
    borderWidth: 2
  },
});
