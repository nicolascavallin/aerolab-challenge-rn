import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CTA from "../../../components/CTA";
import { colors, fonts } from "../../../theme";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productImage}>
          <Image
            source={{
              uri: "https://thumb.pccomponentes.com/w-530-530/articles/17/173850/chormecastv3.jpg",
            }}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </View>
        <View style={styles.productData}>
          <Text style={{ fontFamily: fonts.MontserratSemibold }}>Nombre</Text>
          <Text style={{ fontFamily: fonts.MontserratMedium }}>Categoría</Text>
        </View>
      </View>
      <CTA />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 24,
  },
  productContainer: {
    backgroundColor: colors.neutrals[0],
    borderWidth: 1,
    borderColor: colors.neutrals[300],
    borderRadius: 16,
    marginBottom: 16,
  },
  productImage: {
    aspectRatio: 4 / 3,
    padding: 16,
  },
  productData: {
    borderTopWidth: 1,
    borderColor: colors.neutrals[300],
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
});

export default ProductCard;
