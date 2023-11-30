import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const Card = ({
  headlinePlainText,
  brief,
  name1,
  parentTag,
  ongoingEventName,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageName}>
        <View style={styles.contentFlexBox}>
          <ImageBackground
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image.png")}
          />
        </View>
        <View style={[styles.nameCard, styles.tagBorder]}>
          <Text style={[styles.name, styles.nameFlexBox]}>{name1}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={styles.briefBorder}>
            <Text style={[styles.headlinePlainText, styles.nameFlexBox]}>
              {headlinePlainText}
            </Text>
          </View>
          <View style={[styles.brief, styles.briefBorder]}>
            <Text style={[styles.headlinePlainText, styles.nameFlexBox]}>
              {brief}
            </Text>
          </View>
        </View>
        <View style={styles.dateandtags}>
          <View style={[styles.tag2, styles.tagBorder]}>
            <Text style={[styles.name, styles.nameFlexBox]}>{parentTag}</Text>
          </View>
          <View style={[styles.tag1, styles.tagBorder]}>
            <Text style={[styles.name, styles.nameFlexBox]}>
              {ongoingEventName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagBorder: {
    paddingVertical: Padding.p_10xs,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  contentFlexBox: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  briefBorder: {
    padding: Padding.p_8xs,
    backgroundColor: Color.colorWhite,
    flex: 1,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  imageIcon: {
    height: 206,
    alignSelf: "stretch",
  },
  name: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.libreFranklinRegular,
  },
  nameCard: {
    height: 18,
    paddingHorizontal: Padding.p_6xs,
    marginTop: 7,
    alignSelf: "stretch",
  },
  imageName: {
    width: 154,
    padding: Padding.p_7xs,
    alignItems: "center",
    height: 241,
  },
  headlinePlainText: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  brief: {
    marginTop: 9,
  },
  content: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_11xs,
  },
  tag2: {
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
  },
  tag1: {
    marginLeft: 4,
    paddingHorizontal: Padding.p_11xs,
    flexDirection: "row",
  },
  dateandtags: {
    height: 23,
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  body: {
    paddingVertical: Padding.p_9xs,
    flex: 1,
    height: 241,
    paddingHorizontal: Padding.p_11xs,
  },
  card: {
    backgroundColor: Color.colorGainsboro,
    height: 242,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xs,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
});

export default Card;
