import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CircularImage = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 30, // Half of width and height to create a circle
    backgroundColor: '#F0F0F0', // Light gray background color
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CircularImage;
