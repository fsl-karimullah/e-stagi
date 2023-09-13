import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../../resources/images";
import { horizontalScale, verticalScale } from "../../resources/metrics";
import TextField from "../../components/TextField";
import { colorBlack } from "../../resources/colors";
import ButtonComponent from "../../components/ButtonComponent";

type Props = { navigation: any };

const Login = (props: Props) => {
  return (
    <View style={styles.containerLogin}>
      <View style={styles.containerIcon}>
        <Image source={images.logoFirst} style={styles.logoImg} />
      </View>
      <Text style={styles.textLogin}>Selamat Datang Silahkan Masuk</Text>
      <View style={styles.containerInput}>
        <TextField
          label={"Username"}
          keyboardType={"default"}
          secureTextEntry={false}
          variant="standard"
          color={"black"}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Password"}
          secureTextEntry={false}
          keyboardType={"default"}
          variant="standard"
          color={"black"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title={"Reset"} color={"red"} tintColor={"white"} />
        <ButtonComponent title={"Login"} color={"black"} onPress={() => props.navigation.navigate('Homepage')} />
      </View>
      <View style={styles.containerTextBottom}>
        <Text style={styles.textLogin}>Belum Memiliki Akun ? </Text>
        <Pressable onPress={() => props.navigation.navigate("Register")}>
          <Text style={styles.textLogin}>Daftar Disini</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logoImg: {
    width: horizontalScale(100),
    height: verticalScale(100),
    resizeMode: "contain",
  },
  containerIcon: {
    alignItems: "center",
  },
  textLogin: {
    fontSize: horizontalScale(15),
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
    color: colorBlack,
  },
  containerInput: {
    marginVertical: 10,
  },
  containerTextBottom: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: horizontalScale(10),
  },
});
