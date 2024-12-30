import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const MatchScreen = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get('window');

  const handleChat = () => {
    router.push('/ChatMessage'); // Navigate to the chat screen
  };

  const handleSkip = () => {
    router.push('/(tabs)/HomeScreen'); // Navigate to the home screen
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width * 0.05,
      }}
    >
      {/* Header Text */}
      <Text
        style={{
          fontSize: width * 0.07,
          color: '#EF4765',
          fontWeight: 'bold',
          marginBottom: height * 0.02,
          position: 'absolute',
          top: height * 0.12,
        }}
      >
        Cheers!
      </Text>
      <Text
        style={{
          fontSize: width * 0.075,
          color: '#5E5E5E',
          fontWeight: 'bold',
          marginBottom: height * 0.02,
          position: 'absolute',
          top: height * 0.20,
        }}
      >
        It's a match.
      </Text>

      {/* Profile Images and Icon */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: height * 0.05,
          position: 'absolute',
          top: height * 0.35,
          width: width * 0.8,
        }}
      >
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s',
          }}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            borderRadius: (width * 0.25) / 2,
            top:60,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/images/Love.png')}
            style={{
              width: width * 0.14,
              height: width * 0.16,
              right:48,
              top:36,
            }}
          />
          <Image
            source={require('../../assets/images/Love_Chat.png')}
            style={{
              width: width * 0.14,
              height: width * 0.16,
              marginTop: height * 0.04,
              left:50,
             bottom:4,
              
            }}
          />
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s',
          }}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            borderRadius: (width * 0.25) / 2,
            bottom:38,
          }}
        />
      </View>

      {/* Chat Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#EF4765',
          padding: height * 0.02,
          borderRadius: 50,
          alignItems: 'center',
          position: 'absolute',
          bottom: height * 0.15, // Set bottom alignment
          width: width * 0.2,
          height: width * 0.2,
          justifyContent: 'center',
        }}
        onPress={handleChat}
      >
        <Ionicons name="chatbubble-outline" size={width * 0.08} color="white" />
      </TouchableOpacity>

      {/* Skip Text */}
      <TouchableOpacity onPress={handleSkip}>
        <Text
          style={{
            color: '#EF4765',
            fontSize: width * 0.045,
            top: height * 0.41,
            textAlign: 'center',
            right: 2, // Right alignment
            width: '10%', 
             // Set bottom alignment
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
