import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { router, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

 // Corrected import

export default function TabLayout() {
  const navigation = useNavigation();

  return (
    <>
     
      <StatusBar barStyle="dark-content" backgroundColor="hsla(0, 0%, 100%, 1)" />

      <Tabs screenOptions={{ tabBarActiveTintColor: '#EF4765' }}>
        <Tabs.Screen
          name="HomeScreen"
          options={{
            title: 'Home',
            headerTitle:' Home',
            headerTitleStyle: { color: 'hsla(0, 0%, 68%, 1)' },
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={28}  color={color} />
              
            ),
           

            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('Menu')}>
                navigation.openDrawer();
                <Ionicons name="filter"  size={32}
                  color="'hsla(0, 0%, 68%, 1)"
                  style={{ marginLeft: 20 }} />
               
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}
              >
                <TouchableOpacity
                  onPress={() => router.navigate('/(app)/Notification')}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons name="notifications-outline" size={24} color="'hsla(0, 0%, 68%, 1)" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

<Tabs.Screen
  name="ChatScreen"
  options={{
    title: 'Chat',
    headerTitleAlign: 'center',
    headerTitle: 'Chat',
    headerTitleStyle: { color: 'hsla(0, 0%, 68%, 1)' },
    tabBarIcon: ({ color }) => (
      <Ionicons name="chatbubble-outline" size={28} color={color} />
    ),
    headerRight: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Download Icon */}
        <TouchableOpacity onPress={() => console.log('Download action')}>
          <MaterialCommunityIcons
            name="download" // Download icon
            size={24}
            color="hsla(0, 0%, 68%, 1)"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        {/* Delete Icon */}
        <TouchableOpacity onPress={() => console.log('Delete action')}>
          <MaterialCommunityIcons
            name="delete-outline" // Delete icon
            size={24}
            color="hsla(0, 0%, 68%, 1)"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => router.navigate('/(tabs)/HomeScreen')}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          color="hsla(0, 0%, 68%, 1)"
          style={{ marginLeft: 15 }}
        />
      </TouchableOpacity>
    ),
  }}
/>

        <Tabs.Screen
          name="FavouriteScreen"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color }) => (
              <Feather name="heart" size={28}  color={color} />
            ),
            headerTitleAlign: 'center',
            headerTitle:' Match Request',
            headerTitleStyle: { color: 'hsla(0, 0%, 68%, 1)' },
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.navigate('/(tabs)/HomeScreen')}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={24}
                  color="hsla(0, 0%, 68%, 1)"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Menu')}>
                <MaterialCommunityIcons
                  name="drag-horizontal-variant"
                  size={24}
                  color="hsla(0, 0%, 68%, 1)"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="NewProfile"
          options={{
            title: 'Users',
            headerTitle:'Jennifer Matches',
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'hsla(0, 0%, 68%, 1)' },
         // Center the title
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.navigate('/(tabs)/HomeScreen')}>
                <MaterialCommunityIcons
                  name="chevron-left" // Back icon for navigation to Home
                  size={24}
                  color="hsla(0, 0%, 68%, 1)"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
      
    </>
  );
}
