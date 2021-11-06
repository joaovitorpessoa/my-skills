import React from "react";
import { StatusBar } from "react-native";

import { Home } from "./src/pages";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#121015" />
      <Home />
    </>
  );
};

export default App;
