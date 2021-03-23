import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from './src';

export default function App() {
  return (
    <View  flex="1" alignItems="center" justifyContent="center" bg="royalblue">
      <Text mb="4">hello</Text>
      <Text color="white">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
