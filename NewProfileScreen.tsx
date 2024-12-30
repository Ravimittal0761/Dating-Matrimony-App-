import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const NewProfileScreen: React.FC = () => {
  const [name, setName] = useState<string>('Brian Immanuel');
  const [birthday, setBirthday] = useState<string>('05/MM/YYYY');
  const [gender, setGender] = useState<string>('');
  const [location, setLocation] = useState<string>('Jakarta, Indonesia');
  const [job, setJob] = useState<string>('Graphic Designer');
  const [companyName, setCompanyName] = useState<string>('Design Center');
  const [collegeName, setCollegeName] = useState<string>('Design School Int');
  const [description, setDescription] = useState<string>('HI HGHRFD');

  const router = useRouter();

  const handleSubmit = () => {
    if (
      !name ||
      !birthday ||
      !gender ||
      !location ||
      !job ||
      !companyName ||
      !collegeName ||
      !description
    ) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    router.push('/WelcomeScreen');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#fff',
          paddingBottom: height * 0.01, // Prevent content clipping
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled" // Ensures the scroll view handles taps while keyboard is open
      >
        {/* Header Background */}
        <ImageBackground
          source={require('../../assets/images/Add-image.png')}
          style={{
            width: width,
            height: height * 0.34,
            resizeMode: 'cover',
            marginBottom: height * 0.03,
          }}
        />

        {/* Form Container */}
        <View
          style={{
            paddingHorizontal: width * 0.05,
          }}
        >
          {/* Name Field */}
          <View style={{ marginBottom: height * 0.02 }}>
            <Text style={{ marginBottom: 5, fontSize: width * 0.035, color: 'gray' }}>
              Name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  height: height * 0.07,
                  color: 'black',
                  fontSize: width * 0.04,
                }}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor="#aaa"
              />
              <Ionicons name="person-outline" size={24} color="gray" />
            </View>
          </View>

          {/* Birthday Field */}
          <View style={{ marginBottom: height * 0.02 }}>
            <Text style={{ marginBottom: 5, fontSize: width * 0.035, color: 'gray' }}>
              Birthday
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  height: height * 0.07,
                  color: 'black',
                  fontSize: width * 0.04,
                }}
                value={birthday}
                onChangeText={setBirthday}
                placeholder="Birthday"
                placeholderTextColor="#aaa"
              />
              <Ionicons name="calendar-outline" size={24} color="gray" />
            </View>
          </View>

          {/* Gender Selection */}
          <Text style={{ marginBottom: 5, fontSize: width * 0.035, color: 'gray' }}>Gender</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: height * 0.02,
            }}
          >
            {['Male', 'Female'].map((item) => (
              <TouchableOpacity
                key={item}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: gender === item ? '#EF4765' : 'gray',
                  marginHorizontal: width * 0.02,
                }}
                onPress={() => setGender(item)}
              >
                <Text
                  style={{
                    color: gender === item ? '#EF4765' : 'gray',
                    fontSize: width * 0.04,
                    height: height * 0.03,
                  }}
                >
                  {item}
                </Text>
                <Ionicons
                  name={`${item.toLowerCase()}-outline`}
                  size={24}
                  color={gender === item ? '#EF4765' : 'gray'}
                  style={{ marginTop: height * 0.01,
                    alignSelf: "flex-start",
                    bottom:30,
                    left:10,
                   }}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Other Fields */}
          {[{ label: 'Location', value: location, onChange: setLocation, icon: 'location-outline' },
            { label: 'Job', value: job, onChange: setJob, icon: 'briefcase-outline' },
            { label: 'Company Name', value: companyName, onChange: setCompanyName, icon: 'business-outline' },
            { label: 'College Name', value: collegeName, onChange: setCollegeName, icon: 'school-outline' }
          ].map((field, index) => (
            <View key={index} style={{ marginBottom: height * 0.02 }}>
              <Text style={{ marginBottom: 5, fontSize: width * 0.035, color: 'gray' }}>
                {field.label}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    height: height * 0.07,
                    color: 'black',
                    fontSize: width * 0.04,
                  }}
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder={field.label}
                  placeholderTextColor="#aaa"
                />
                <Ionicons name={field.icon} size={24} color="gray" />
              </View>
            </View>
          ))}

          {/* Description */}
          <Text style={{ marginBottom: 5, fontSize: width * 0.035, color: 'gray' }}>Description</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: height * 0.02,
              height: height * 0.15,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                fontSize: width * 0.04,
                
                textAlignVertical: 'top',
              }}
              value={description}
              onChangeText={setDescription}
              placeholder="Description"
              placeholderTextColor="#aaa"
              multiline
            />
            
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#EF4765',
              padding: height * 0.02,
              borderRadius: 8,
              alignItems: 'center',
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: width * 0.045,
                fontWeight: 'bold',
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewProfileScreen;
