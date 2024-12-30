import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: height * 0.05,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: height * 0.05,
        }}
      >
        <Image
          source={require("../../assets/images/con-App.png")}
          style={{
            width: width * 0.3,
            height: height * 0.06,
            resizeMode: "contain",
            marginTop: height * 0.02,
            bottom: height * 0.12,
            right: width * 0.3,
          }}
        />
        <Image
          source={require("../../assets/images/Logo.png")}
          style={{
            width: width * 0.8, // Increased width
            height: height * 0.3, // Increased height
            resizeMode: "contain",

            top: height * 0.02, // Adjusted vertical position
            right: width * 0.02,
          }}
        />
      </View>

      {/* Welcome Text */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: width * 0.04,
            color: "grey",
            textAlign: "center",
          }}
        >
          Welcome To
        </Text>
        <Text
          style={{
            fontSize: width * 0.08,
            color: "#5D5D5D",
            textAlign: "center",
          }}
        >
          Xcrino
        </Text>
        <Text
          style={{
            fontSize: width * 0.035,
            color: "#FF9BAD",
            textAlign: "center",
            marginTop: height * 0.01,
          }}
        >
          Match. Chat. Meet.
        </Text>
      </View>

      {/* Buttons Section */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="../LoginScreens"
          style={{
            backgroundColor: "#EF476F",
            paddingVertical: height * 0.02,
            borderRadius: 8,
            marginVertical: height * 0.01,
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            gap: 20,
          }}
        >
          <Feather
            name="smartphone"
            size={24}
            color="white"
            style={{
              marginRight: width * 0.25,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: width * 0.045,
              fontWeight: "bold",
              textAlign: "center", // Centers text horizontally within the container
              marginLeft: width * 0.2, // Adjust left margin if needed
              justifyContent: "center",
            }}
          >
            Continue with Phone
          </Text>
        </Link>
        <Link
          href="../LoginScreens"
          style={{
            borderColor: "#EF476F",
            borderWidth: 1,
            paddingVertical: height * 0.02,
            borderRadius: 8,
            marginVertical: height * 0.01,
            width: "80%",
            textAlign: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo
            name="facebook"
            size={24}
            color="#EF476F"
            style={{
              marginRight: width * 0.5,
            }}
          />
          <Text
            style={{
              color: "#EF476F",
              fontSize: width * 0.045,
              fontWeight: "bold",
              marginLeft: width * 0.02,
            }}
          >
            Continue with Facebook
          </Text>
        </Link>
      </View>

      {/* Footer Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: width * 0.035,
            color: "#000",
            textAlign: "left",
            marginRight: width * 0.02,
          }}
        >
          Don't have an account?
        </Text>
        <Link href="../LoginScreens">
          <Text
            style={{
              color: "#EF476F",
              fontWeight: "bold",
              fontSize: width * 0.035,
              marginLeft: width * 0.23,
              textAlign: "right",
            }}
          >
            Sign Up
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Index;
