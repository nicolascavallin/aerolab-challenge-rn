import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./src/About";
import HomeScreen from "./src/Home";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBlack: require("./assets/fonts/Montserrat-Black.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
