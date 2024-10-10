import React from "react";
import Header from "./components/header";
import CharacterRatings from "./components/characterRatings";
import CharacterCards from "./components/characterCards";
import { data } from "./fma-data";

const App = () => {
  return (
    <div>
      <Header />
      <CharacterRatings characters={data} />
      <CharacterCards characters={data} />
    </div>
  );
};

export default App;
