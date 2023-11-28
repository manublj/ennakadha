const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOMEpage from "./screens/HOMEpage";
import Header from "./components/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    "LibreFranklin-Regular": require("./assets/fonts/LibreFranklin-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HOMEpage"
              component={HOMEpage}
              options={(props) => ({
                headerShown: true,
                header: () => <Header />,
              })}
            />
            <Stack.Screen
              name="Header"
              component={Header}
              options={(props) => ({
                headerShown: true,
                header: () => <Header />,
              })}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
