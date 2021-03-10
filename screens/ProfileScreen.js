import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

export default function ProfileScreen() {
  const img1 = "../assets/WIN_20210310_18_39_06_Pro.jpg";
  const img2 = "../assets/WIN_20210310_18_39_10_Pro.jpg";

  const [first, setFirst] = useState(true);

  const onPressButton = () => {
    if (first === true) {
      setFirst(false);
    } else {
      setFirst(true);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: "40%",
          backgroundColor: "powderblue",
          alignSelf: "center",
          justifyContent: "center",
        }}
        onPress={onPressButton}
      >
        <View
          style={{
            backgroundColor: "#2196F3",
          }}
        >
          <Text style={{ textAlign: "center", padding: 20, color: "white" }}>
            Click me
          </Text>
        </View>
      </TouchableOpacity>
      {first ? (
        <Image
          style={{ width: 250, height: 250, alignSelf: "center" }}
          source={require(img1)}
        />
      ) : (
        <Image
          style={{ width: 250, height: 250, alignSelf: "center" }}
          source={require(img2)}
        />
      )}

      <View style={{ flex: 3, backgroundColor: "steelblue", justifyContent: 'center' }}>
        <Text style={{padding: 20, fontSize: 20}}>
          What is happening? There is OPACITY on BUTTON. If you PRESS the IMAGE
          will change. Also positioning of the SCREEN is done with ALIGNsELF.
        </Text>
      </View>
    </View>
  );
}
