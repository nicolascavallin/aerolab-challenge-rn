import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { activeOpacity, colors, fonts } from "../../theme";

interface OptionProps {
  isSelected?: boolean;
  label: string;
}

const Option: FC<OptionProps> = ({ isSelected, label }) => {
  //
  const Label = <Text style={styles.text}>{label}</Text>;
  const LabelTransparent = (
    <Text style={[styles.text, { opacity: 0 }]}>{label}</Text>
  );

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 4,
      }}
      activeOpacity={activeOpacity}
    >
      <LinearGradient
        style={styles.gradientContainer}
        colors={
          isSelected
            ? [colors.brand.defaultStart, colors.brand.defaultEnd]
            : [colors.neutrals[200], colors.neutrals[200]]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {isSelected ? (
          Label
        ) : (
          <MaskedView maskElement={Label}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.brand.defaultStart, colors.brand.defaultEnd]}
            >
              {LabelTransparent}
            </LinearGradient>
          </MaskedView>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  gradientContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.neutrals[0],
    fontFamily: fonts.MontserratSemibold,
    fontSize: 18,
  },
  textDisabled: {
    color: colors.neutrals[600],
  },
  disabled: {
    opacity: 0.5,
  },
});
