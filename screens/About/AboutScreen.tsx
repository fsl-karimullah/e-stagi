import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.description}>
       Selamat datang di aplikasi E - Stagi, aplikasi yang bisa membantu kita untuk mengetahui gizi hanya dengan berat dan tinggi badan. 
      </Text>
      <Text style={styles.description}>
        Misi kami adalah untuk membantu mencetak generasi indonesia sehat.
      </Text>
      <Text style={styles.description}>
        Hubungi kami di estagi@gmail.com untuk lebih lanjut dan dukungan.
      </Text>
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
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
