import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import images from "../../resources/images";
import { horizontalScale, verticalScale } from "../../resources/metrics";
import TextField from "../../components/TextField";
import { colorBlack } from "../../resources/colors";
import ButtonComponent from "../../components/ButtonComponent";
import { register } from "../../Function/RegisterFunction";

type Props = { navigation: any };

const Register = (props: Props) => {
  const [student_nis, setstudent_nis] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }

    try {
      const registrationData = { student_nis, password };
      const response = await register(registrationData);
      navigation.navigate("Login")
      setMessage(response.message);
    } catch (error) {
      // Handle registration errors
      console.log(error);
      setMessage('Terjadi kesalahan silahkan coba input data lagi secara teliti dan lengkap pastikan nis anda benar');
    }
  };
  return (
    <View style={styles.containerRegister}>
      <ScrollView>
      <View style={styles.containerIcon}>
        <Image source={images.logoFirst} style={styles.logoImg} />
      </View>
      <Text style={styles.textRegister}>Selamat Datang Silahkan Daftar</Text>
      <Text style={styles.textRegister}>{message}</Text>
      <View style={styles.containerInput}>
        <TextField
          label={"NIS"}
          keyboardType={"default"}
          secureTextEntry={false}
          variant="standard"
          color={'black'}
          value={student_nis}
          onChangeText={(text: React.SetStateAction<string>) => setstudent_nis(text)}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Password"}
          secureTextEntry={true}
          keyboardType={"default"}
          variant="standard"
          color={'black'}
          value={password}
          onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        />
      </View>
      <View style={styles.containerInput}>
        <TextField
          label={"Konfirmasi Password"} 
          secureTextEntry={true}
          keyboardType={"default"}
          variant="standard"
          color={'black'}
          value={confirmPassword}
          onChangeText={(text: React.SetStateAction<string>) => setConfirmPassword(text)}
        /> 
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title={"Reset"} color={"red"} tintColor={"white"} />
        <ButtonComponent title={"Register"} color={"black"} onPress={() => handleRegister()} />
      </View>
     <View style={styles.containerTextBottom}>
     <Text style={styles.textRegister}>
        Sudah Memiliki Akun ?
      </Text>
      <Pressable onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textRegister}>{" "}Masuk Disini</Text>
        </Pressable>
     </View>
     </ScrollView>
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
    width: horizontalScale(300),
    height: verticalScale(200),
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
