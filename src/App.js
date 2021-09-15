
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import SignupScreen from './screend/SignupScreen';
import LoginScreen from './screend/LoginScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
  
  },
};
const Stack = createNativeStackNavigator();
const Navigation=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App=()=> {
  return (
    <>
    <PaperProvider theme={theme}>
      <StatusBar barStyle= "dark-content" backgroundColor="green" />
      <View style={styles.container}>
        < Navigation />
        </View>
        </PaperProvider>
    </>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
});
export default App;
