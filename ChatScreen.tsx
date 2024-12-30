import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Alert, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const ChatScreen = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchText, setSearchText] = useState('');

  const newMatches = [
    { id: '1', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '2', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '3', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWtK8c4UpeY7MxOPT4JoIde8OfcUJl4eteg&s' } },
    { id: '4', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '5', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
  ];

  const [messages, setMessages] = useState([
    { id: '1', name: 'Patricia', message: 'Omg, that was so much fun. Let\'s go together again soon!', time: '08:33 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '2', name: 'Lyona', message: 'Hi Brian, how are you? Long time no see.', time: '08:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '3', name: 'Merry', message: 'We can go together, I\'ll wait at the bus stop.', time: '10:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '4', name: 'Merry', message: 'We can go together, I\'ll wait at the bus stop.', time: '10:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '5', name: 'Merry', message: 'We can go together, I\'ll wait at the bus stop.', time: '10:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
  ]);

  const handleDelete = () => {
    if (selectedChat) {
      setMessages(messages.filter((message) => message.id !== selectedChat));
      setSelectedChat(null);
    } else {
      Alert.alert('No chat selected', 'Please select a chat to delete.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={width * 0.05} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Messages"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>

      {/* New Matches */}
      <View style={styles.newMatchesHeader}>
        <Text style={styles.newMatchesText}>New Matches</Text>
        <TouchableOpacity onPress={() => router.navigate("/(app)/Matches")}>
          <View style={styles.newMatchesArrow}>
            <Text style={{ color: '#ef4765' }}>See All</Text>
            <Ionicons name="arrow-forward" size={width * 0.06} color="#EF4765" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.newMatches}>
        {newMatches.map((item) => (
          <Image key={item.id} source={item.image} style={styles.profileImage} />
        ))}
      </View>

      {/* Messages */}
      <Text style={styles.messagesHeading}>Message</Text>
      {messages.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => setSelectedChat(item.id)}>
          <View style={styles.messageRow}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.messageText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
  },
  searchContainer: {
    marginVertical: height * 0.01,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.04,
    marginLeft: width * 0.02,
  },
  newMatchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.01,
  },
  newMatchesText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'gray',
  },
  newMatches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  newMatchesArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#4F4765',
  },
  messagesHeading: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'gray',
    marginVertical: height * 0.02,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    marginVertical: height * 0.01,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.03,
  },
  messageText: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
    fontSize: width * 0.035,
  },
  time: {
    color: '#999',
    fontSize: width * 0.035,
  },
});

export default ChatScreen;
