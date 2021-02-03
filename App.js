import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export default function App() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let current_time = `${hours}:${minutes}`;

  return (
    <View style={styles.container}>
      <AdMobBanner style={styles.banner1} bannerSize="fullBanner" adUnitID="ca-app-pub-2851827333967207/8640104821" servePersonalizedAds />

      <Text style={styles.text1}>{current_time}</Text>
      <StatusBar style="auto" />

      <AdMobBanner style={styles.banner2} bannerSize="fullBanner" adUnitID="ca-app-pub-2851827333967207/8640104821" servePersonalizedAds />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171515",
    justifyContent: "center",
  },

  text1: {
    marginTop: 25,
    fontSize: 70,
    textAlign: "center",
    color: "#f5ffff",
  },

  banner1: {
    position: "absolute",
    marginTop: 30,
    top: 0,
  },

  banner2: {
    position: "absolute",
    bottom: 0,
  },
});
