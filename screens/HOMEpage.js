import * as React from "react";
import { ScrollView, StatusBar, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Card from "../components/Card";

const HOMEpage = () => {
  return (
    <ScrollView
      style={styles.homepage}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.hOMEpageScrollViewContent}
    >
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.newsfeed1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.newsfeedScrollViewContent}
      >
        <Card
          headlinePlainText="Statement / Quote"
          brief="Brief"
          name1="Name"
          parentTag="#parent-tag"
          ongoingEventName="#ongoing-event-name"
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsfeedScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hOMEpageScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  newsfeed1: {
    alignSelf: "stretch",
    flex: 1,
  },
  homepage: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    maxWidth: "100%",
    flex: 1,
  },
});

export default HOMEpage;
