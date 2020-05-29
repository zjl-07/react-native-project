import { StyleSheet, Dimensions } from "react-native";
import { color } from "utils/globalStyles";

const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  latestNewsContainer: {
    padding: 20,
    height: 320,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newsContainer: {
    height: 180,
    width: screenWidth - 100,
    borderRadius: 5,
    marginVertical: 10,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  subTitle: {
    color: color.darkgrey,
  },
  paddingLeft: {
    paddingRight: 20,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
