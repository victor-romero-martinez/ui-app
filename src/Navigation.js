import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import About from "./screens/About";
import Header from "./components/Header";
import InProgress from "./screens/InProgress";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTintColor: "#2a2a40",
        headerStyle: { backgroundColor: "#ffd800" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
          headerShown: true,
          headerLeft: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "Acerca",
          headerShown: true,
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

function MyTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="StackScreen"
        component={MyStack}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
