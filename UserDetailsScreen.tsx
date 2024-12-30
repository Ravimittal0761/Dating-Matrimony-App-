import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const UserDetailsScreen = () => {
  const galleryImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dx5cryNHylOPKhtT2Q4xAOEr0tRsPop5Sw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09gAGmVXCTklSQzn_kh4FnmzZz5g6gKXrNw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__T3RDsFvR9Rl8UutnoOvcFgCT4bJzi9vKQ&',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09gAGmVXCTklSQzn_kh4FnmzZz5g6gKXrNw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dx5cryNHylOPKhtT2Q4xAOEr0tRsPop5Sw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRf1fI27a-t0rAGRFZYlVwzAJYu1jphf6DA&s',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Upper Image */}
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKoJp5j8RjRbEOJzt-UB97oMWC668JqH6Jw&s',
          }}
          style={styles.upperImage}
        />

        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Buttons with Icons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="close" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="heart" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="star" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Profile Details */}
          <Text style={styles.nameText}>Jennifer, 22</Text>
          <Text style={styles.professionText}>Fashion Model</Text>
          <Text style={styles.locationText}>Jakarta, Indonesia</Text>
          <Text style={styles.detailsText}>Fashion Centre</Text>
          <Text style={styles.detailsTexts}>Fashion School</Text>

          {/* About Me Section */}
          <View style={styles.aboutMeSection}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.descriptionText}>
              I really like dancing. Dancing is a part of my life. Do you want
              to dance with me? I will teach you to dance, you will not regret
              doing it. See you tomorrow!
            </Text>
          </View>

          {/* Gallery Section */}
          <View style={styles.gallerySection}>
            <View style={styles.galleryHeader}>
              <Text style={styles.sectionTitle}>Gallery</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={galleryImages}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.galleryItem}>
                  <Image source={{ uri: item }} style={styles.galleryImage} />
                </View>
              )}
              contentContainerStyle={styles.galleryContainer}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  upperImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profileCard: {
    backgroundColor: '#fff',
    marginTop: 220,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -40,
    marginBottom: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EF4765',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  locationText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  professionText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  detailsTexts: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutMeSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    textAlign: 'center',
  },
  gallerySection: {
    marginTop: 20,
  },
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#EF4765',
  },
  galleryContainer: {
    marginTop: 10,
    paddingHorizontal: 10, // Adds padding to the gallery
    justifyContent: 'space-between', // Space out the items
  },
  galleryItem: {
    margin: 5, // Space between individual images
    flex: 1, // Ensures the items fill the available space
    alignItems: 'center',
  },
  galleryImage: {
    width: width / 3 - 15,
    height: width / 3 - 15,
    borderRadius: 12,
    borderWidth: 1, 
    borderColor: '#ddd', // Light border color
    backgroundColor: '#f9f9f9', // Fallback color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // Shadow effect for Android
  },
});

export default UserDetailsScreen;
