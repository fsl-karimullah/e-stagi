import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { API_ENDPOINTS } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  navigation: any;
  userData: any;
};

const Profile = (props: Props) => {
  useEffect(() => {
    console.log("USERDATA", props.userData.userData);
  }, []);

  const handleSignOut = async () => {
    // Show a confirmation alert before logging out
    Alert.alert(
      "Konfirmasi",
      "Apakah anda yakin akan keluar?",
      [
        {
          text: "No", 
          onPress: () => console.log("Sign out canceled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              // Send a POST request to the /api/logout endpoint
              const response = await fetch(API_ENDPOINTS.LOGOUT, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // Add any other headers as needed, e.g., authentication token
                  Authorization: `Bearer ${props.userData.userData.token}`,
                },
                // Add any request body data if required
                // body: JSON.stringify({}),
              });

              if (response.status === 200) {
                await AsyncStorage.removeItem("@userToken");
                props.navigation.navigate("Login");
              } else {
                // Handle logout failure or error
                console.error("Logout failed");
                // You can display an error message to the user if needed
              }
            } catch (error) {
              console.error("Logout error:", error);
              // Handle network or other errors here
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {/* <Image source={{ uri: props.userData.profileImage }} style={styles.profileImage} /> */}
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.name}>{props.userData.userData.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIS:</Text>
          <Text style={styles.email}>{props.userData.userData.nis}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.email}>{props.userData.userData.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Salary:</Text>
          <Text style={styles.email}>{props.userData.userData.salary}</Text>
        </View>
        <View style={styles.row}> 
          <Text style={styles.label}>School Distance:</Text>
          <Text style={styles.email}>
            {props.userData.userData.school_distance} km
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.email}>{props.userData.userData.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Classroom:</Text>
          <Text style={styles.email}>{props.userData.userData.classroom}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => handleSignOut()}
        >
          <Text style={styles.signOutText}>Logout</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  actionContainer: {
    marginTop: 20,
  },
  signOutButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
