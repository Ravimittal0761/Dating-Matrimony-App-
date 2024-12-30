import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const VideoCallScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' }} // Network background image
      style={styles.background}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="chevron-left" size={width * 0.05} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Video Call</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <FontAwesome name="camera" size={width * 0.05} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainParticipant}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' }} // Network main participant image
          style={styles.mainImage}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nGDgiQ-XkefkRAeN30XS10mMm2krg9qrrQ&s' }} // Network profile image
          style={styles.profileImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.whiteButton]}>
          <FontAwesome name="microphone-slash" size={width * 0.06} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => router.back()}>
          <FontAwesome name="phone" size={width * 0.06} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteButton]}>
          <FontAwesome name="video-camera" size={width * 0.06} color="grey" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: height * 0.03,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between items
    paddingHorizontal: width * 0.05,
  },
  backButton: {
    padding: width * 0.02,
  },
  headerText: {
    fontSize: width * 0.05,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    flex: 1, // Let it take up remaining space for alignment
  },
  cameraButton: {
    padding: width * 0.02,
  },
  mainParticipant: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    position: 'absolute',
    bottom: height * 0.15,
    left: width * 0.08,
    width: width * 0.25,
    height: height * 0.15,
    borderRadius: width * 0.025,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.025,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    padding: width * 0.04,
    borderRadius: width * 0.1,
  },
  whiteButton: {
    backgroundColor: 'white',
  },
  blackButton: {
    backgroundColor: 'red',
  },
});

export default VideoCallScreen;
