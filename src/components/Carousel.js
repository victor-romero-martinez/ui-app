import { View, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Carusel() {
  return (
      <Carousel
        width={200}
        height={50}
        data={[{ color: "red" }, { color: "purple" }, { color: "yellow" }]}
        renderItem={({ color }) => (
          <View
            style={{
              backgroundColor: color,
              justifyContent: "center",
              flex: 1,
            }}
          />
        )}
      />
  );
}
