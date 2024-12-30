import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CallScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="chevron-left" size={width * 0.05} color="grey" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Call</Text>
      </View>

      {/* Profile Picture and Status */}
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <Image
            source={{ uri: 'https://st4.depositphotos.com/13193658/27067/i/450/depositphotos_270674086-stock-photo-beautiful-smiling-teenage-girl-looking.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.onlineIndicator} />
        </View>
        <Text style={styles.profileName}>Patricia</Text>
        <Text style={styles.callingStatus}>Calling...</Text>
      </View>

      {/* Call Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={width * 0.08} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={() => navigation.navigate('VideoCallScreen')}>
          <Ionicons name="videocam" size={width * 0.08} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="volume-high" size={width * 0.08} color="grey" />
        </TouchableOpacity>
      </View>

      {/* End Call Button */}
      <TouchableOpacity style={styles.endCallButton}>
        <Ionicons name="call" size={width * 0.08} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    position: 'absolute',
    top: 20,
  },
  backButton: {
    marginRight: width * 0.02,
   
  },
  headerText: {
    flex: 1,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'grey',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.15,
  },
  profileWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.2,
    bottom: height * 0.021,
    top: height* 0.15,
  },
  onlineIndicator: {
    position: 'absolute',
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: width * 0.025,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'white',
    top: height* 0.28,
    left: height* 0.10,
  },
  profileName: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginVertical: height * 0.02,
    top: height* 0.15,
  },
  callingStatus: {
    fontSize: width * 0.05,
    color: 'gray',
    top: height* 0.15,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: height * 0.2,
  },
  controlButton: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    backgroundColor: 'hsla(0, 0%, 100%, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.18,
   
  },
  endCallButton: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.09,
    backgroundColor: '#EF4765',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.12,
  },
});

export default CallScreen;
