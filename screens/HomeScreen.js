import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FadeInView from "../components/FadeInView";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Välkommen hem</Text>
      <FadeInView
        style={{
          width: 250,
          height: 150,
          backgroundColor: "powderblue",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Dobrodosli Doma</Text>
      </FadeInView>
      <Text style={styles.text2}>
        What is happening? I am calling child component FadeInView. Inside this
        components ANIMATION happens. I put TEXT as child in between it.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
});
