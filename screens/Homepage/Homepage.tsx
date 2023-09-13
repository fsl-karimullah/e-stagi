import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CardDashboard from "../../components/CardDashboard";
import { Avatar } from "react-native-paper";
import CardDashboardNew from "../../components/CardDashboardNew";
import images from "../../resources/images";

type Props = {};

const Homepage = (props: Props) => {
  const [dataCard, setdataCard] = useState([
    { id: 1, title: "Data Anda", image: images.logoFirst },
    { id: 2, title: "Info Gizi", image: images.logoFirst },
    { id: 3, title: "Pengukuran", image: images.logoFirst },
    { id: 4, title: "Quisioner", image: images.logoFirst },
    { id: 5, title: "History Pengukuran", image: images.logoFirst },
    { id: 6, title: "Tentang Aplikasi", image: images.logoFirst },
  ]);
  return (
    <View style={styles.containerHomepage}>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Selamat Datang, Amir Faisal Karimullah !
        </Text>
      </View>
      <View style={styles.containerItem}>
        <FlatList
          data={dataCard}
          renderItem={({ item }) => (
            <View style={styles.containerItemCard}>
              <CardDashboardNew itemKey={item.id} title={item.title} />
            </View>
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
}; 

export default Homepage;

const styles = StyleSheet.create({
  containerHomepage: {
    display: "flex",
    backgroundColor: "white",
    flex: 1,
  },
  containerText: {
    margin: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  containerItem: {
    alignSelf: "center",
  },
  containerItemCard: {
  },
});
