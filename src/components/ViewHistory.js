import { StyleSheet, Text, View } from "react-native";

export default function ViewHistory({ item }) {
  const date = new Date(item.fecha).toLocaleDateString();

  return (
    <View style={st.container}>
      <Text style={st.txt}>{item.nombreNegocio}</Text>
      <View>
        <View style={st.mount}>
          {item.tipo === "retiro" ? (
            <>
              <Text style={[st.txt, { color: "#e64a19" }]}>-</Text>
              <Text style={[st.txt, { color: "#e64a19" }]}>
                Gs. {item.monto}
              </Text>
            </>
          ) : (
            <>
              <Text style={[st.txt, { color: "#1ed760" }]}>+</Text>
              <Text style={[st.txt, { color: "#1ed760" }]}>
                Gs. {item.monto}
              </Text>
            </>
          )}
        </View>
        <View>
          <Text style={st.txtDate}>{date}</Text>
        </View>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mount: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtDate: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#2a2a4040",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
});
