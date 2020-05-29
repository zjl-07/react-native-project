import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default StyleSheet.create({
  preBookingContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: color.darkgrey,
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  categoriesItem: {
    backgroundColor: color.tomato,
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
    maxWidth: 125,
    borderRadius: 5,
    marginRight: 10,
  },
  categoriesTitle: {
    color: color.white,
    textAlign: "center",
  },
  preBookItem: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  marginRight: {
    marginRight: 10,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
