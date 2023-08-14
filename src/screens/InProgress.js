import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function InProgress() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>InProgress :(</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976d2",
  },
  txt: {
    fontSize: 40,
    color: "#fff",
  },
  back: {
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  btn: {
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 6
  },
});
