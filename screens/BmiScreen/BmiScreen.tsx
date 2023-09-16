import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import ButtonComponent from "../../components/ButtonComponent";
import axios from "axios";
import { API_ENDPOINTS } from "../../services/api";
import { connect } from "react-redux";
type Props = {
  userData: any;
};

const BmiScreen = (props: Props) => {
  const [data, setdata] = useState();
  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const addMearusement = () => {
    const data = {
      height: height, // Replace with the actual height value
      weight: weight, // Replace with the actual weight value
    };
    const headers = {
      Authorization: `Bearer ${props.userData.userData.token}`,
      "Content-Type": "application/json", // Specify the content type as JSON
    };
    // Define the API endpoint URL
    const endpoint = API_ENDPOINTS.MEARUSEMENT; // Replace with the actual API URL

    // Make the POST request using Axios
    axios
      .post(endpoint, data, { headers })
      .then((response) => {
        console.log("POST Request Successful:", response.data);
        // Handle the successful response here
        setdata(response.data.data);
      })
      .catch((error) => {
        console.error("POST Request Error:", error);
        // Handle errors here
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextField
          value={height}
          onChangeText={(text) => setheight(text)}
          helpertext={"Masukkan Tinggi Badan Anda"}
          color={"black"}
          label={"Tinggi Badan"}
          keyboardType={"numeric"}
        />
        <TextField
          value={weight} 
          onChangeText={(text) => setweight(text)}
          helpertext={"Masukkan Berat Badan Anda"}
          color={"black"}
          label={"Berat Badan"}
          keyboardType={"numeric"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title={"Submit"}
          color={"black"}
          onPress={() => addMearusement()}
        />
      </View>
      <View>
       {data != undefined ? (
         <View style={styles.containerText}>
          <Text style={styles.textTitle}>ID : {data.id}</Text>
         <Text style={styles.textTitle}>Status : {data.status}</Text>
         <Text style={styles.textTitle}>Berat Badan :{data.weight}</Text>
         <Text style={styles.textTitle}>Tinggi Badan : {data.height}</Text>
         <Text style={styles.textTitle}>LMT : {data.imt}</Text>
         </View>
       ) : (<Text style={[styles.textTitle,{margin:10}]}>Hasil pengukuran akan muncul disini</Text>)}
      </View>
    </View>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(BmiScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerInput: {
    marginTop: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  containerText:{
    margin:10
  },
  textTitle:{
    fontSize:20,
    fontWeight:'bold',
    letterSpacing:2,
  }
});
