import React from "react";
import { render } from "react-dom";
import { View } from "react-native";
import { Counter } from "../MobileDemo/app/shared/components/counter";

const App = () => {
  return (
    <View>
      <Counter />
    </View>
  );
};

render(<App />, document.getElementById("root"));
