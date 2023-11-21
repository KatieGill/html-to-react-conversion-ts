import "./character-ratings.css";
import { Character } from "../../character-data";
import { RatingTableRow } from "./components/RatingTableRow";

const getTopFive = (arr: Character[]) => {
  return [...arr]
    .sort(function (a, b) {
      return b.votes - a.votes;
    })
    .slice(0, 5);
};

type CharacterRatingsProps = {
  characters: Character[];
};

export function CharacterRatings({ characters }: CharacterRatingsProps) {
  const topFiveArr = getTopFive(characters);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {topFiveArr.map((item: Character, itemIndex) => {
          const isEven = itemIndex % 2 !== 0;
          return <RatingTableRow item={item} isEven={isEven} key={item.name} />;
        })}
      </table>
    </section>
  );
}
