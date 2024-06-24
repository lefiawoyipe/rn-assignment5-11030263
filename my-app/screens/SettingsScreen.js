import React, { useContext } from 'react';
import { View, Switch, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext'; // Adjust the import path based on your file structure

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Language > </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Profile > </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Us > </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password > </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy > </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode: </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerDark: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#333333',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonsContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', // iOS style blue color
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    fontSize: 18,
    marginRight: 10,
    color: '#ffffff', // Text color for dark mode
  },
});

export default SettingsScreen;
