
import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext'; 
import CircularImage from './CircularImage'; 

const HomeScreen = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#333333' : '#ffffff' }]}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../Images/profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}><Text style={styles.boldText}>Eric Atsu</Text></Text>
          </View>
          <Image
            source={require('../Images/search.png')}
            style={styles.searchImage}
          />
        </View>

        <View style={styles.cardContainer}>
          <Image
            source={require('../Images/Card.png')}
            style={styles.cardImage}
          />
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.actionItem}>
            <CircularImage source={require('../Images/send.png')} />
            <Text style={styles.actionText}>Send</Text>
          </View>
          <View style={styles.actionItem}>
            <CircularImage source={require('../Images/recieve.png')} />
            <Text style={styles.actionText}>Receive</Text>
          </View>
          <View style={styles.actionItem}>
            <CircularImage source={require('../Images/loan.png')} />
            <Text style={styles.actionText}>Loan</Text>
          </View>
          <View style={styles.actionItem}>
            <CircularImage source={require('../Images/topUp.png')} />
            <Text style={styles.actionText}>Topup</Text>
          </View>
        </View>

        <View style={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>Transactions</Text>
          <View style={styles.transactionList}>
            <View style={styles.transactionItem}>
              <CircularImage source={require('../Images/apple.png')} />
              <View style={styles.transactionTextContainer}>
                <Text style={styles.transactionText}>Apple Store</Text>
                <Text style={styles.transactionSubtitle}>Entertainment</Text>
              </View>
              <View style={styles.rightList}>
                <Text style={styles.rightListText}> -$5,99</Text>
                <Text style={styles.rightListText}></Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <CircularImage source={require('../Images/spotify.png')} />
              <View style={styles.transactionTextContainer}>
                <Text style={styles.transactionText}>Spotify</Text>
                <Text style={styles.transactionSubtitle}>Music</Text>
              </View>
              <View style={styles.rightList}>
                <Text style={styles.rightListText}> -$12,99</Text>
                <Text style={styles.rightListText}></Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <CircularImage source={require('../Images/moneyTransfer.png')} />
              <View style={styles.transactionTextContainer}>
                <Text style={styles.transactionText}>Money Transfer</Text>
                <Text style={styles.transactionSubtitle}>Transaction</Text>
              </View>
              <View style={styles.rightList}>
                <Text style={styles.rightListText}> $300</Text>
                <Text style={styles.rightListText}></Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <CircularImage source={require('../Images/grocery.png')} />
              <View style={styles.transactionTextContainer}>
                <Text style={styles.transactionText}>Grocery</Text>
                <Text style={styles.transactionSubtitle}>Items</Text>
              </View>
              <View style={styles.rightList}>
                <Text style={styles.rightListText}>-$88</Text>
                <Text style={styles.rightListText}></Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.sellAllButton}>
            <Text style={styles.sellAllButtonText}>Sell All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons outside the gray background */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyCards')}
        >
          <CircularImage source={require('../Images/myCards.png')} />
          <Text style={styles.buttonText}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Statistics')}
        >
          <CircularImage source={require('../Images/statictics.png')} />
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <CircularImage source={require('../Images/settings.png')} />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Added padding for spacing
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start', // Aligns header to the top left
    marginBottom: 30, // Adds some bottom margin for separation
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 10, // Adds spacing between profile image and text
  },
  textContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  searchImage: {
    width: 20,
    height: 20,
    marginLeft: 10, // Adds spacing between text and search image
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  cardImage: {
    width: 250,
    height: 150,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionText: {
    fontSize: 14, 
    marginTop: 5, 
    textAlign: 'center', 
  },
  transactionContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionList: {
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', 
    borderRadius: 8, 
  },
  transactionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  rightList: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  rightListText: {
    fontSize: 12,
    color: '#666',
  },
  sellAllButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  sellAllButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF', 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
