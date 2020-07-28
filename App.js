import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigation";

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MealsNavigator />;
}
