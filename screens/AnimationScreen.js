import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AnimationScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to our Animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
  },
});
