import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "../../components/NewsCard";

type Props = {};

const ListNews = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <NewsCard
          isButton={true}
          title={"Hello this is example news"}
          subtitle={
            "Do ut id sit ut cupidatat deserunt veniam consectetur exercitation proident. Sint et culpa ea pariatur minim deserunt aliqua aute amet. Sit cupidatat id aute ex velit excepteur veniam officia ut. Pariatur ad laborum duis Lorem eiusmod minim culpa commodo. Non dolore enim pariatur labore cupidatat aliquip veniam. Do magna adipisicing reprehenderit voluptate cupidatat. Incididunt incididunt ex amet eu eiusmod culpa esse anim esse."
          }
        />
      </View>
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerCard: {
    margin: 10,
  },
});
