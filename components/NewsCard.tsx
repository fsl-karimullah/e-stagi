import * as React from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

type Props = { title: any; subtitle: any; isButton?: boolean, imgSrc:any };
const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
const NewsCard = (props: Props) => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={props.imgSrc}
        style={styles.cover}
      />
      <Card.Content>
        <React.View style={styles.containerContent}>
          <Text numberOfLines={1} variant="titleLarge">{props.title}</Text>
          <Text numberOfLines={3} variant="bodyMedium">
            {props.subtitle}
          </Text>
        </React.View>
        {props.isButton ? (
          <Card.Actions>
            <Button>Read More</Button>
          </Card.Actions>
        ) : null}
      </Card.Content>
    </Card>
  );
};

export default NewsCard;

const styles = React.StyleSheet.create({
  containerContent: {
    marginTop: 10,
  },
  cover: {
    margin: 3,
    borderRadius: 5,
  },
  card: {
    borderRadius: 5,
  },
});
