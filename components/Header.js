import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Header = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <View style={[styles.header1, styles.header1FlexBox]}>
            <Text style={[styles.newsfeed, styles.header1FlexBox]}>
              Newsfeed
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header1FlexBox: {
    flex: 1,
    alignItems: "center",
  },
  icon1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icon: {
    padding: Padding.p_base,
    flexDirection: "row",
  },
  newsfeed: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignSelf: "stretch",
  },
  header1: {
    height: 54,
    justifyContent: "center",
    paddingHorizontal: Padding.p_46xl,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  header: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 56,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  view: {
    paddingTop: Padding.p_8xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Header;
