import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";
import { API_ENDPOINTS } from "../../services/api";
import { connect } from "react-redux";

type Props = {
  userData: any;
};

const ListNews = (props: Props) => {
  const [data, setData] = useState([]);

  // Make a GET request to the /api/narrations endpoint
  useEffect(() => {
   fetchData()
  }, []);
  const fetchData = () => {
    // Make the GET request to /api/narrations with the user token
    fetch(API_ENDPOINTS.NARATION, {
      headers: {
        Authorization: `Bearer ${props.userData.userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((error) => { 
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <NewsCard
              isButton={true}
              title={item.title}
              subtitle={
                "Do ut id sit ut cupidatat deserunt veniam consectetur exercitation proident. Sint et culpa ea pariatur minim deserunt aliqua aute amet. Sit cupidatat id aute ex velit excepteur veniam officia ut. Pariatur ad laborum duis Lorem eiusmod minim culpa commodo. Non dolore enim pariatur labore cupidatat aliquip veniam. Do magna adipisicing reprehenderit voluptate cupidatat. Incididunt incididunt ex amet eu eiusmod culpa esse anim esse."
              }
              imgSrc={{
                uri: `https://ery.9cloud.my.id/${item.picture}`,
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListNews);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerCard: {
    margin: 10,
  },
});
