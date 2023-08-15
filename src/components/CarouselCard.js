import { StyleSheet, ScrollView, Dimensions, View, Image } from "react-native";
import { Carousel } from "react-native-basic-carousel";
import { slider } from "../db/slider";

const WIDTH_SLIDER = Dimensions.get("window").width;

const CarouselCard = () => {
  return (
    <ScrollView style={st.container}>
      <Carousel
        data={slider}
        renderItem={({ item, index }) => (
          <View style={st.containerCarousel} key={index}>
            <Image
              source={{ uri: item.url }}
              resizeMode="cover"
              style={st.img}
            />
          </View>
        )}
        itemWidth={WIDTH_SLIDER}
        autoplay
      />
    </ScrollView>
  );
};

export default CarouselCard;

const st = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  containerCarousel: {
    width: WIDTH_SLIDER - 20,
    alignItems: "center",
    ustifyContent: "center", 
  },
  img: {
    alignItems: "center",
    width: WIDTH_SLIDER - 60,
    height: 120,
    borderRadius: 10,
  },
});
