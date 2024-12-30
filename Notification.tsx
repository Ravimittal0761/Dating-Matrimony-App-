import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const notificationsToday = [
  {
    id: '1',
    name: 'Clara',
    age: 22,
    distance: '5 Km',
    time: '2 minutes ago',
    type: 'match',
    icon: 'heart-outline',
  },
  {
    id: '2',
    name: 'Renna',
    age: 23,
    distance: '10 Km',
    time: '10 minutes ago',
    type: 'match',
    icon: 'heart-outline',
  },
  {
    id: '3',
    name: 'Patricia',
    age: 23,
    message: 'Omg, that was so much fun. Let\'s ...',
    time: '10 minutes ago',
    type: 'message',
  },
];

const notificationsYesterday = [
  {
    id: '4',
    name: 'Patricia',
    age: 23,
    comment: 'The scenery is very beautiful. I want to go there.',
    time: '24 hours ago',
    type: 'comment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s',
  },
  {
    id: '5',
    name: 'Patricia',
    age: 23,
    likeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wNsSYegiL-XlSHVqOeeFy1cLm_XDB3A2Cg&s',
    likes: 200,
    time: '24 hours ago',
    type: 'like',
  },
];

const Notification = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}, {item.age}</Text>
        {item.type === 'match' && (
          <Text>{item.time} - <Ionicons name={item.icon} size={16} /> invited you for a match.</Text>
        )}
        {item.type === 'message' && (
          <Text>{item.time} - {item.message}</Text>
        )}
        {item.type === 'comment' && (
          <>
            <Text>{item.time} - {item.comment}</Text>
            <Image source={{ uri: item.image }} style={styles.commentImage} />
          </>
        )}
        {item.type === 'like' && (
          <>
            <Text>{item.time} - liked your photo.</Text>
            <Image source={{ uri: item.likeImage }} style={styles.likeImage} />
            <Text>{item.likes} likes</Text>
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today</Text>
      <FlatList
        data={notificationsToday}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Yesterday</Text>
      <FlatList
        data={notificationsYesterday}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  likeImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Notification;
