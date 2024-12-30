import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get('window'); // Get window dimensions
const profiles = [
  { name: 'Clara', age: 22, distance: '5 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5iznooJ_do6czU206wuBX-aPUIExsD5EGA&s' } },
  { name: 'Eveline', age: 19, distance: '6 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFm-P9gQbBIXwcJwqKQEvw5PfTOUC8UtKp7Q&s' } },
  { name: 'Melly', age: 20, distance: '8 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYLIBQrZSbiHNSCVF98ODTvMKOGtTJeQYwA&s' } },
  { name: 'Renna', age: 23, distance: '10 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0P_eiCwdHwjhZRKYwBolzkCi2wGnVndrBg&s' } },
  { name: 'Layla', age: 24, distance: '9 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QH2IrpRytXpTblu2ENTtK9cP6eoYbOAqSQ&s' } },
  { name: 'Windy', age: 21, distance: '20 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXiCjNCRD5Udo8YlT5fJFfjZAgL4fx9UYnA&s' } },
];

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={width * 0.06} color="#ccc" style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search Match Request" />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={profiles}
        keyExtractor={(item) => item.name}
        numColumns={2} // 2 columns for grid layout
        renderItem={({ item }) => (
          <View style={styles.profileContainer}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.overlayContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.profileName}>{item.name}, {item.age}</Text>
                <View style={styles.distanceContainer}>
                  <Ionicons name="location-sharp" size={width * 0.038} color="#fff" style={styles.locationIcon} />
                  <Text style={styles.profileDistance}>{item.distance}</Text>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.rejectButton} onPress={() => console.log('Rejected', item.name)}>
                  <Ionicons name="close" size={width * 0.1} color="#ACACAC" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.likeButton} onPress={() => console.log('Liked', item.name)}>
                  <AntDesign name="hearto" size={width * 0.07} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#fff',
    height: height * 0.06,
    marginBottom: height * 0.02,
  },
  searchIcon: {
    marginRight: width * 0.02,
  },
  searchBar: {
    flex: 1,
    fontSize: width * 0.04,
    color:'hsla(0, 0%, 68%, 1)',
  },
  profileContainer: {
    flex: 1,
    margin: width * 0.02,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: height * 0.37,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  textContainer: {
    padding: width * 0.05,
  },
  profileName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#fff',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: width * 0.02,
  },
  profileDistance: {
    fontSize: width * 0.04,
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: width * 0.01,
    bottom: 10,
  },
  rejectButton: {
    borderRadius: 60,
    backgroundColor: 'white',
    padding: width * 0.02,
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4765',
    padding: width * 0.03,
    borderRadius: 100,
  },
});

export default FavouriteScreen;
