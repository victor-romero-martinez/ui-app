import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import About from "./screens/About";
import Header from "./components/Header";
import HistoryScreen from "./screens/HistoryScreen";
import InProgress from "./screens/InProgress";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "#2a2a40",
        headerStyle: { backgroundColor: "#ffd800" },
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: ""
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
          headerLeft: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "Acerca",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitle: "Moviminetos",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="inprogress"
        component={InProgress}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
