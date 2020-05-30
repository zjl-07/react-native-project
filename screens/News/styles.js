import { StyleSheet, Dimensions } from "react-native";
import { color } from "utils/globalStyles";

const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    margin: 20,
    height: 320,
    flex: 1,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  newsContainer: {
    marginVertical: 10,
  },
  newsImage: {
    height: 180,
    width: screenWidth - 50,
    borderRadius: 5,
    marginVertical: 10,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  subTitle: {
    color: color.darkgrey,
  },
  centerContent: {
    display: "flex",
    // alignContent: "center",
    justifyContent: "center",
  },
});
