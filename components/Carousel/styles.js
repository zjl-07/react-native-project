import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default (screenWidth) =>
  StyleSheet.create({
    container: {
      height: 250,
    },
    item: {
      width: screenWidth - 100,
      height: screenWidth - 180,
    },
    imageContainer: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: "cover",
    },
    image: {
      borderRadius: 5,
    },
    paginationDots: {
      width: 10,
      height: 10,
      borderRadius: 5,
      top: -20,
    },
    paginationDotsAInactive: { backgroundColor: color.black },
  });
