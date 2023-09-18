import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import images from "../../resources/images";
import { horizontalScale, verticalScale } from "../../resources/metrics";
import TextField from "../../components/TextField";
import { colorBlack } from "../../resources/colors";
import ButtonComponent from "../../components/ButtonComponent";
import { connect, useDispatch } from "react-redux";
import {
  resetUserData,
  saveUserData,
} from "../../redux/actions/userDataAction";
import studentLogin from "../../Function/LoginFunction";

type Props = {
  navigation: any;
  useData: any;
  saveUserData: any;
  resetUserData: any;
};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const [nis, setnis] = useState();
  const [password, setpassword] = useState();
  const handleLogin = async () => {
    try {
      const token = await studentLogin(nis, password, dispatch);
      props.navigation.navigate('Homepage')
      // If login is successful, navigate to the main screen or perform other actions
    } catch (error) {
      // Handle login error (display error message to the user, etc.)
      Alert.alert("Error", error.message)
      console.log("Login error:", error.message);
    }
  };
 

 
  return (
    <View style={styles.containerLogin}>
      <ScrollView>
      <View style={styles.containerIcon}>
        <Image source={images.logoFirst} style={styles.logoImg} />
      </View>
      <Text style={styles.textLogin}>Selamat Datang Silahkan Masuk</Text>
      <View style={styles.containerInput}>
        <TextField
          label={"NIS"}
          keyboardType={"default"} 
          value={nis}
          onChangeText={(text) => setnis(text)}
          secureTextEntry={false}
          variant="standard"
          color={"black"}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Password"}
          secureTextEntry={true}
          onChangeText={(text) => setpassword(text)}
          keyboardType={"default"}
          variant="standard"
          color={"black"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title={"Reset"} color={"red"} tintColor={"white"} />
        <ButtonComponent
          title={"Login"}
          color={"black"}
          onPress={() => handleLogin()}
        />
      </View>
      {/* <View style={styles.containerTextBottom}>
        <Text style={styles.textLogin}>Belum Memiliki Akun ? </Text>
        <Pressable onPress={() => props.navigation.navigate("Register")}>
          <Text style={styles.textLogin}>Daftar Disini</Text>
        </Pressable>
      </View> */}
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  saveUserData,
  resetUserData,
};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logoImg: {
    width: horizontalScale(300),
    height: verticalScale(200),
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
