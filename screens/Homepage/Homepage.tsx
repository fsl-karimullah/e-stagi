import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CardDashboard from "../../components/CardDashboard";
import { Avatar } from "react-native-paper";
import CardDashboardNew from "../../components/CardDashboardNew";
import images from "../../resources/images";
import { connect } from "react-redux";

type Props = {
  navigation:any,
  userData:any
};

const Homepage = (props: Props) => {
  const [dataCard, setdataCard] = useState([
    { id: 1, title: "Data Anda", image: images.logoHome1, route:"Profile" },
    // { id: 2, title: "Info Gizi", image: images.logoFirst,route:"info" },
    { id: 2, title: "Pengukuran", image: images.logoHome2,route:"BmiScreen" },
    { id: 3, title: "Narasi", image: images.logoHome3,route:"ListNews" },
    { id: 4, title: "Question", image: images.logoHome4,route:"QuestionScreen" },
    { id: 5, title: "History Pengukuran", image: images.logoHome5,route:"HistoryBMI" },
    { id: 6, title: "Tentang Aplikasi", image: images.logoHome6,route:"AboutScreen" },
  ]);
  return (
    <View style={styles.containerHomepage}>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Selamat Datang, {props.userData.userData.name === undefined ? 'guest' : props.userData.userData.name }
        </Text> 
      </View>   
      <View style={styles.containerItem}>
        <FlatList
          data={dataCard}
          renderItem={({ item }) => (
            <View style={styles.containerItemCard}>
              <CardDashboardNew itemKey={item.id} title={item.title} onPress={() => props.navigation.navigate(item.route)} imageSource={item.image} />
            </View>
          )}
          numColumns={2}
        />
      </View>
    </View> 
  );
}; 

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

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
