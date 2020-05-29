import { StyleSheet } from "react-native";
import { color } from "utils/globalStyles";

export default StyleSheet.create({
  productContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: color.white,
    padding: 20,
    paddingBottom: 0,
  },
  productItem: {
    width: 80,
    height: 80,
    margin: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.grey,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    marginBottom: 5,
  },
  productItem: {
    width: 80,
    height: 80,
    margin: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.grey,
  },
  subProductContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  SubProductItem: {
    width: 60,
    height: 60,
    margin: 7,
    display: "flex",
    alignItems: "center",
  },
  subProductImage: {
    marginHorizontal: 5,
    height: 25,
  },
  productTitle: {
    textAlign: "center",
  },
});
