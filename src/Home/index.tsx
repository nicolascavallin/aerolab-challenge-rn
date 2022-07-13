import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Option from "../components/Option";
import { colors } from "../theme";
import ProductCard from "./components/ProductCard";

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = (props) => {
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeArea.top + 12,
        backgroundColor: colors.neutrals[0],
      }}
    >
      <Text>Tech Products</Text>
      <View style={{ paddingVertical: 8 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          centerContent
        >
          <Option label="Most Recent" />
          <Option label="Lower Price" isSelected />
          <Option label="Highest Price" />
        </ScrollView>
      </View>
      <View style={{ flexGrow: 1 }}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 12,
            paddingBottom: safeArea.bottom,
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>
        <LinearGradient
          style={{
            height: 12,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
          colors={["#FFFFFFFF", "#FFFFFF00"]}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
