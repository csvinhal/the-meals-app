import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMealScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text>The Category Meal screen</Text>
      <Button
        title="Go to Meal Detail!"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
