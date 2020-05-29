import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    color: color.darkgrey,
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
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
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoriesTitle: {
    color: color.white,
    textAlign: "center",
  },
  preBookItem: {
    height: 177,
    width: 177,
    resizeMode: "cover",
  },
});
