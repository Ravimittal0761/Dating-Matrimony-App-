import { Image, View, Animated, PanResponder, TouchableOpacity, Dimensions } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from react-navigation
import TinderCard from "@/components/TinderCard";
import { router } from "expo-router"; // Ensure this is from expo-router
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const userData = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 1, title: "Hulk" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuD8EgtSs7Hkm6KI6yd9SvhtB31KTGpEAG0Q&s", id: 2, title: "Ironman" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwtNK6xl5oo8IObaZJ9aWlvvz0Mg6OF-kHA&s", id: 3, title: "Thor" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMp_Kfos8AGoDDhd6WM4pjU66nL1nsW5SPg&s", id: 4, title: "Thor" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 5, title: "Thor" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 6, title: "Thor" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s", id: 7, title: "Thor" },
];

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [data, setData] = useState(userData);
  const navigation = useNavigation(); // Use the useNavigation hook

  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const removeCard = useCallback(() => {
    setData((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  useEffect(() => {
    if (!data.length) {
      setData(userData);
    }
  }, [data]);

  const handleChoiceButtons = useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        toValue: direction * width,
        duration: 500,
        useNativeDriver: true,
      }).start(removeCard);
    },
    [removeCard, swipe.x]
  );

  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: direction * width, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const handleImagePress = (id) => {
    router.navigate('/(app)/UserDetailsScreen', { itemId: id }); // Navigate to UserDetailsScreen and pass the itemId
  };

  return (
    <View style={{ flex: 1, position: 'relative', backgroundColor: 'white' }}>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              key={item.id}
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHanlders}
              onImagePress={() => handleImagePress(item.id)} // Handle image press for navigation
            />
          );
        })
        .reverse()}

      <View
        style={{
          position: 'absolute',
          bottom: 40,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#fff",
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            handleChoiceButtons(-1);
          }}
        >
          <MaterialIcons name="close" size={34} color="grey" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#EF4765",
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            handleChoiceButtons(1);
          }}
        >
          <FontAwesome name="heart" size={34} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
