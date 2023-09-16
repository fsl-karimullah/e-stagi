import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { API_ENDPOINTS } from '../../services/api';
import { connect } from 'react-redux';

 type Props = {
    userData: any 
}

const QuestionScreen = (props:Props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (text: React.SetStateAction<string>) => {
    setQuestion(text);
  }; 

  const handleAnswerChange = (text: React.SetStateAction<string>) => {
    setAnswer(text);
  };


const handleSubmit = () => {
    // Replace 'your-token-here' with your actual token
const token = props.userData.userData.token;

// Define the API endpoint URL
const endpoint = API_ENDPOINTS.QUESTION; // Replace with the actual API URL

// Define the data to be sent in the POST request
const postData = {
  question: question,
  answer: answer,
};

// Define the headers with the token
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

// Make the POST request using Axios with the headers and data
axios
  .post(endpoint, postData, { headers })
  .then((response) => {
    console.log('POST Request Successful:', response.data);
    // Handle the successful response here
    Alert.alert('Information', "Question Submitted")
  }) 
  .catch((error) => {
    console.error('POST Request Error:', error);
    // Handle errors here 
    Alert.alert("Error", "Terjadi Kesalahan Pastikan data yang anda masukkan benar")
  });
}

  return (
    <View style={styles.container}>
      <TextInput
        label="Question"
        value={question}
        onChangeText={handleQuestionChange}
        style={styles.input}
      />
      <TextInput
        label="Answer"
        value={answer}
        onChangeText={handleAnswerChange}
        style={styles.input}
      />
      <Button mode="contained" onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 20,
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
