import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../../theme";

interface CTAProps {
  isDisabled?: boolean;
}

const CTA: FC<CTAProps> = ({ isDisabled }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} disabled={isDisabled}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={
          isDisabled
            ? [colors.neutrals[200], colors.neutrals[200]]
            : [colors.brand.defaultStart, colors.brand.defaultEnd]
        }
        style={styles.gradientContainer}
      >
        <Text style={[styles.text, isDisabled && styles.textDisabled]}>
          Redeem for{" "}
        </Text>
        <Text style={[styles.text, isDisabled && styles.textDisabled]}>🪁</Text>
        <Text style={[styles.text, isDisabled && styles.textDisabled]}>
          {" "}
          12.500
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CTA;

const styles = StyleSheet.create({
  gradientContainer: {
    padding: 12,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.neutrals[0],
    fontFamily: fonts.MontserratSemibold,
  },
  textDisabled: {
    color: colors.neutrals[600],
  },
  disabled: {
    opacity: 0.5,
  },
});
