import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useNavigation } from 'expo-router';
import { routeToScreen } from 'expo-router/build/useScreens';

// Get device dimensions for responsive styling
const { width, height } = Dimensions.get('window');

const ChatMessage = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { text: 'Hi Patricia, You look beautiful.', timestamp: '08:29 PM', type: 'sent' },
    { text: 'Thank you, you look good too.', timestamp: '08:30 PM', type: 'received' },
    { text: 'What kind of music do you like Patricia?', timestamp: '08:31 PM', type: 'sent' },
    { text: 'Almost all music genres I like, but what I like best is rock and roll music.', timestamp: '08:32 PM', type: 'received' },
    { text: 'I also really like rock and roll music. Next week are you busy? I want to take you to a music concert, how?', timestamp: '08:33 PM', type: 'sent' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { text: inputText, timestamp: new Date().toLocaleTimeString(), type: 'sent' };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={width * 0.06} color="black" />
          </TouchableOpacity>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeumGgeGsBd4hP9NROzz7pC8CeS30pCXr7g&s' }} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={styles.profileName}>Patricia</Text>
            <Text style={styles.onlineStatus}>Online</Text>
          </View>
          <View style={styles.videoCallButton}>
            <TouchableOpacity onPress={() => router.navigate('/(app)/CallScreen')}>
              <Ionicons name="call-outline" size={width * 0.08} color="#ACACAC" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/VideoCallScreen')}>
              <Ionicons name="videocam-outline" size={width * 0.08} color="#ACACAC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Chat messages */}
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.messageContainer, message.type === 'sent' ? styles.sentMessage : styles.receivedMessage]}>
            <View style={message.type === 'sent' ? styles.messageBubblePink : styles.messageBubbleWhite}>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
            <Text style={styles.timestamp}>{message.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input box */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="happy-outline" size={width * 0.06} color="#888" style={styles.innerIconButton} />
          <TextInput
            style={styles.input}
            placeholder="Write a message"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.innerIconButton}>
            <Ionicons name="camera-outline" size={width * 0.06} color="#888" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send-outline" size={width * 0.06} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: height * 0.00,
    backgroundColor: 'hsla(0, 0%, 100%, 1)',
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
   
    borderBottomColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.05,
  },
  backButton: {
    marginRight: width * 0.03,
  },
  profileImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
  },
  headerText: {
    marginLeft: width * 0.03,
    flex: 1,
  },
  profileName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  onlineStatus: {
    color: 'green',
    fontSize: width * 0.035,
  },
  videoCallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  chatContainer: {
    flex: 1,
    padding: width * 0.04,
  },
  messageContainer: {
    marginBottom: height * 0.01,
  },
  sentMessage: {
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
  },
  messageBubblePink: {
    backgroundColor: 'pink',
    padding: width * 0.04,
    color: 'white',
    borderRadius: width * 0.02,
  },
  messageBubbleWhite: {
    backgroundColor: '#f0f0f0',
    padding: width * 0.03,
    borderRadius: width * 0.05,
  },
  messageText: {
    fontSize: width * 0.04,
  },
  timestamp: {
    fontSize: width * 0.03,
    color: '#888',
    marginTop: height * 0.005,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.023,
  },
  innerIconButton: {
    marginLeft: width * 0.02,
  },
  sendButton: {
    backgroundColor: '#EF4765',
    padding: width * 0.03,
    borderRadius: width * 0.05,
    marginLeft: width * 0.02,
  },
});

export default ChatMessage;
