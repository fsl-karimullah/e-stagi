import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../../resources/images";
import { horizontalScale, verticalScale } from "../../resources/metrics";
import TextField from "../../components/TextField";
import { colorBlack } from "../../resources/colors";
import ButtonComponent from "../../components/ButtonComponent";

type Props = { navigation: any };

const Register = (props: Props) => {
  return (
    <View style={styles.containerRegister}>
      <View style={styles.containerIcon}>
        <Image source={images.logoFirst} style={styles.logoImg} />
      </View>
      <Text style={styles.textRegister}>Selamat Datang Silahkan Daftar</Text>
      <View style={styles.containerInput}>
        <TextField
          label={"Username"}
          keyboardType={"default"}
          secureTextEntry={false}
          variant="standard"
          color={'black'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Password"}
          secureTextEntry={false}
          keyboardType={"default"}
          variant="standard"
          color={'black'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Konfirmasi Password"} 
          secureTextEntry={false}
          keyboardType={"default"}
          variant="standard"
          color={'black'}
        /> 
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title={"Reset"} color={"red"} tintColor={"white"} />
        <ButtonComponent title={"Register"} color={"black"} />
      </View>
     <View style={styles.containerTextBottom}>
     <Text style={styles.textRegister}>
        Sudah Memiliki Akun ?{" "}
      </Text>
      <Pressable onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textRegister}>Masuk Disini</Text>
        </Pressable>
     </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  containerRegister: {
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
  textRegister: {
    fontSize: horizontalScale(15),
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
    color: colorBlack,
  },
  containerInput: {
    marginVertical: 10,
  },
  containerTextBottom:{
    display:'flex', flexDirection:'row',
    alignSelf:'center'
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: horizontalScale(10),
  },
});
