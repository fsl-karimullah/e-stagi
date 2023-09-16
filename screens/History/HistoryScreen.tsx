import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { API_ENDPOINTS } from '../../services/api';

type Props = {
  userData: any;
};

const HistoryScreen = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Format the date to a readable format
  };

  const fetchData = () => {
    // Make the GET request to /api/narrations with the user token
    fetch(API_ENDPOINTS.GET_MEARUSEMENT, {
      headers: {
        Authorization: `Bearer ${props.userData.userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('API Response:', responseData);
        // Update the created_at and updated_at fields to readable formats
        const formattedData = responseData.data.map((item) => ({
          ...item,
          created_at: formatDate(item.created_at),
          updated_at: formatDate(item.updated_at),
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.historyEntry}>
            <Text>ID: {item.id}</Text>
            <Text>Weight: {item.weight} kg</Text>
            <Text>Height: {item.height} m</Text>
            <Text>Status: {item.status}</Text>
            <Text>IMT: {item.imt}</Text>
            <Text>Created At: {item.created_at}</Text>
            <Text>Updated At: {item.updated_at}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyEntry: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: { userData: { data: any } }) => ({
  userData: state.userData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
