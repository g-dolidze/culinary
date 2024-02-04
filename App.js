import React from 'react';
import { View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/Home"
import ProfileScreen from './screens/Profile';
import ChefScreen from './screens/Chef';
import ReseptScreen from './screens/Resept';
import CategoryScreen from './screens/Category';
import RegistrationScreen from './screens/Registration';
import LoginScreen from "./screens/user/Login"
import RemindPassScreen from"./screens/user/RemindPass"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Category' }} />
    <Stack.Screen name="Settings" component={ChefScreen} options={{ title: 'Chef' }} />
    <Stack.Screen name="Resept" component={ReseptScreen} options={{ title: 'Resept' }} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
    <Stack.Screen name="RemindPass" component={RemindPassScreen} options={{ title: 'RemindPass' }} />
    <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: { position: "absolute", bottom: 0, right: 0, left: 0, elevation: 0, height: 60, background: "#fff" } }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={ChefScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="favorite" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }}
          />
          <Tab.Screen
            name="Chef"
            component={ChefScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1fffff",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30
                  }}
                >
                  <MaterialCommunityIcons name="robot-outline" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }}
          />
          <Tab.Screen
            name="My Resept"
            component={ReseptScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="sticker-text-outline" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }}
          />
          <Tab.Screen
            name="User"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <FontAwesome name="user" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
