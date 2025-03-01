import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "components/Carousel";
import ProductList from "components/ProductList";
import LatestNews from "components/LatestNews";
import PreBook from "components/PreBook";
import Spinner from "components/Spinner";
import ErrorMessage from "components/ErrorMessage";

import { PRODUCT_LIST, SUB_PRODUCT_LIST } from "datasource/productList";

import { fetchAnnouncement, fetchNews, fetchPrebook } from "./action";

import styles from "./styles";

const generateElement = ({ data, loading, errorMessage }) => (Components) => {
  if (loading) return <Spinner />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;
  return <Components data={data} />;
};

export default function HomePage() {
  const dispatch = useDispatch();
  const { news, announcement, prebook } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPrebook());
    dispatch(fetchNews());
    dispatch(fetchAnnouncement());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.message}>
        <Text>Welcome to Hiyahiya, wish you have a good day !</Text>
      </View>
      <ProductList mainProduct={PRODUCT_LIST} subProduct={SUB_PRODUCT_LIST} />
      {generateElement({ ...announcement })(Carousel)}
      {generateElement({ ...news })(LatestNews)}
      {generateElement({ ...prebook })(PreBook)}
    </ScrollView>
  );
}
