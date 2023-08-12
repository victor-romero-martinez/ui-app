import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Button({ name, size, screenChange }) {
  const navigation = useNavigation();

  // ir a pantalla
  const goTo = () => navigation.navigate(screenChange);

  return (
    <TouchableOpacity onPress={goTo}>
      <FontAwesome5 name={name} size={size} color="#2a2a40" />
    </TouchableOpacity>
  );
}
