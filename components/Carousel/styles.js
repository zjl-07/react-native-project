import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default (screenWidth) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subTitle: {
      color: color.darkgrey,
    },
    item: {
      width: screenWidth - 100,
      height: 225,
    },
    imageContainer: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: "cover",
    },
    image: {
      borderRadius: 5,
      marginTop: 10,
    },
    paginationDots: {
      width: 10,
      height: 10,
      borderRadius: 5,
      top: 0,
    },
  });
