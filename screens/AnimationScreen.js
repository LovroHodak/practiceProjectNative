import React, { useRef } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Button,
} from "react-native";

const images = [
  "https://cdn.pixabay.com/photo/2021/03/02/12/20/mountains-6062271__340.jpg",
  "https://cdn.pixabay.com/photo/2021/03/03/07/09/background-6064645__340.jpg",
  "https://cdn.pixabay.com/photo/2021/03/02/17/41/long-eared-owl-6063351__340.jpg",
  "https://cdn.pixabay.com/photo/2021/02/26/20/19/sisters-6053044__340.jpg",
];

export default function AnimationScreen({ navigation }) {
  const { width: windowWidth } = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
          
        >
          {images.map((img, i) => {
            return (
              <View style={{ width: windowWidth, height: 250 }} key={i}>
                <ImageBackground source={{ uri: img }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text  style={styles.infoText}>{"Image nr. - " + i}</Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
