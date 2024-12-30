import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const profiles = [
  { name: 'Mario Chic', age: 30, occupation: 'Supervisor', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Richard', age: 24, occupation: 'Entrepreneur', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  { name: 'Shana', age: 23, occupation: 'Manager', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  { name: 'Harry', age: 21, occupation: 'Engineer', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  { name: 'John', age: 28, occupation: 'Teacher', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  { name: 'jame', age: 20, occupation: 'Developer', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  { name: 'Harim', age: 27, occupation: 'Entrepreneur', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s' } },
  // Add more profiles as needed
];

const Matches = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search Matches" />
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.profileContainer}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.profileName}>{item.name}, {item.age}</Text>
              <Text style={styles.profileOccupation}>{item.occupation}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={{ backgroundColor: 'red', borderRadius: 100 }}
                onPress={() => router.navigate({ pathname: '/(app)/ChatMessage', params: { name: item.name, age: item.age, occupation: item.occupation } })}
              >
                <Ionicons name="heart-circle-outline" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectButton} onPress={() => console.log('Rejected', item.name)}>
                <Ionicons name="close-circle-outline" size={30} color="red" />
              </TouchableOpacity>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileOccupation: {
    fontSize: 14,
    color: '#555',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  rejectButton: {
    marginRight: 10,
  },
});

export default Matches;
