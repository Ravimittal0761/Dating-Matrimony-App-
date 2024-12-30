import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Entypo } from "@expo/vector-icons";

const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const router = useRouter();

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleAcceptPress = () => {
    // Navigate to the next screen
    router.push('/NewProfileScreen');
  };

  const handleResendCode = () => {
    console.log('Resend code');
    // Add functionality to resend OTP code here
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleBack}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.instructionText}>
        Please enter the 4-digit OTP {"\n"}sent to +62812 0101 0101
      </Text>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            secureTextEntry={true}
            onChangeText={(value) => handleInputChange(value, index)}
          />
        ))}
      </View>
      <Text style={styles.messageText}>
        Don't Tell Anyone the code
      </Text>
      <Text style={styles.messageText}>
        Expiry in 04:50
      </Text>
      <Text style={styles.resendText} onPress={handleResendCode}>
        Resend Code
      </Text>
      <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptPress}>
        <Text style={styles.acceptButtonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 50,
  },
  topSection: {
    justifyContent: "space-between",
    bottom: 100,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'hsla(0, 0%, 37%, 1)',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'hsla(0, 0%, 37%, 1)',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  messageText: {
    fontSize: 14,
    marginBottom: 10,
    color: 'hsla(0, 0%, 37%, 1)',
  },
  resendText: {
    fontSize: 14,
    color: '#EF4765',
    marginTop: 40,
  },
  acceptButton: {
    width: 300,
    backgroundColor: '#EF4765',
    padding: 15,
    borderRadius: 5,
    marginTop: 35,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OtpScreen;
