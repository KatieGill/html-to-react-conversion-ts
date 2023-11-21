import { characters } from "./character-data";
import { Header } from "./components/Header/Header";
import { CharacterCards } from "./components/CharacterCards/CharacterCards";
import { CharacterRatings } from "./components/CharacterRatings/CharacterRatings";

function App() {
  return (
    <>
      <Header />
      <CharacterRatings characters={characters} />
      <CharacterCards characters={characters} />
    </>
  );
}

export default App;
