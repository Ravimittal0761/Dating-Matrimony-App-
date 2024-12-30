import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
  Image,
  StatusBar,
} from "react-native"; // Correct import for StatusBar
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const countryCodes = [
  { code: "+62", name: "IDN", length: 10 },
  { code: "+1", name: "USA", length: 10 },
  { code: "+91", name: "IND", length: 10 },
  { code: "+44", name: "UK", length: 10 },
];

const LoginScreens = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleCountrySelect = (code:string) => {
    setCountryCode(code);
    setModalVisible(false);
  };

  const handleContinue = () => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    if (!selectedCountry) {
      Alert.alert("Error", "Please select a valid country code.");
      return;
    }

    Alert.alert("Success", "Successfully logged in!", [
      { text: "OK", onPress: () => router.push("/OtpScreen") },
    ]);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      {/* Top Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 100,
          marginTop: 30,
        }}
      >
        <TouchableOpacity onPress={handleBack}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/con-App.png")}
          style={{ width: 100, height: 20 }}
        />
      </View>

      {/* Form Section */}
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        {/* Country Selector */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, color: "gray" }}>
            Country
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../../assets/images/Flag_Icon.png")}
              style={{ width: 33, height: 24, marginRight: 10 }}
            />
            <Text style={{ fontSize: 16, flex: 1 }}>{countryCode}</Text>
            <Feather name="chevron-down" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Country Code Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                width: "80%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 20,
                alignItems: "center",
              }}
            >
              <FlatList
                data={countryCodes}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: "#ccc",
                      width: "100%",
                      alignItems: "center",
                    }}
                    onPress={() => handleCountrySelect(item.code)}
                  >
                    <Text>
                      {item.name} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  marginTop: 20,
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: "red",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Phone Number Input */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, color: "gray" }}>
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              padding: 10,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <Feather name="smartphone" size={20} color="#888" />
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "hsla(0, 0%, 37%, 1)",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          We need your phone number {"\n"} to get Signed in.
        </Text>

        {/* Continue Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#EF4765",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={handleContinue}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreens;
