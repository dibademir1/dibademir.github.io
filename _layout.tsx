import { Stack } from "expo-router";
import React from 'react';
 

import {StyleSheet, View, Text } from 'react-native';


export default function RootLayout() {
  return (
  <Stack
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
  </Stack>

  );
}


const styles = StyleSheet.create({
  BaskervilleFontReg: {
    fontFamily: 'LibreBaskerville_400Regular',
  },
  BaskervilleFontBold: {
    fontFamily: 'LibreBaskerville_700Bold',
  },
  text: {
    color: 'darksalmon',
    fontSize: 20,
    padding: 40,
  },
});