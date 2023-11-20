import { characters } from "./character-data";
import { CharacterCards } from "./components/CharacterCards";
import { CharacterRatings } from "./components/CharacterRatings";



function App() {
  return (
    <>
      <CharacterRatings characters={characters}/>
      <CharacterCards characters={characters}/>
    </>
  );
}

export default App;
