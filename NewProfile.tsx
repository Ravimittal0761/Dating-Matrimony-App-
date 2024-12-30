import React, { useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet } from "react-native";

const userData = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 1 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuD8EgtSs7Hkm6KI6yd9SvhtB31KTGpEAG0Q&s", id: 2 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXiCjNCRD5Udo8YlT5fJFfjZAgL4fx9UYnA&s", id: 3 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0P_eiCwdHwjhZRKYwBolzkCi2wGnVndrBg&s", id: 6 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 7 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 8 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 9 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 10 },
];

const { width } = Dimensions.get("window");
const imageSize = width / 3 - 20;

const photoIcon = require("../../assets/images/Feed_con.png");
const reelIcon = require("../../assets/images/Movie.png");

const ProfileScreen = () => {
  const [data, setData] = useState(userData);

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwtNK6xl5oo8IObaZJ9aWlvvz0Mg6OF-kHA&s" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jennifer, 22</Text>
        <Text style={styles.profileSubtitle}>Model Fashion</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Photo</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Video</Text>
          </View>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={photoIcon} style={styles.buttonIcon} />
          <View style={styles.bottomLine} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={reelIcon} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>

      {/* Image Grid Section */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={{ uri: item.image }} style={styles.gridImage} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    color: "hsla(0, 0%, 37%, 1)",
  },
  profileSubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 23,
    padding: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 25,
    color: "hsla(0, 0%, 37%, 1)",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  bottomLine: {
    width: '650%',
    height: 2,
    backgroundColor: '#EF4765',
    marginTop: 5,
  },
  gridContainer: {
    padding: 10,
  },
  gridImage: {
    width: imageSize,
    height: imageSize,
    margin: 6, // Add margin to add space between images
    borderRadius: 10,
  },
});

export default ProfileScreen;
