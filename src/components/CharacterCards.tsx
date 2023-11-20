import { Component } from "react";
import "./comp-css/character-cards.css";
import { Character } from "../character-data";
import { CharacterCard } from "./CharacterCard";

type CharacterCardsProps = {
  characters : Character[]
}

export class CharacterCards extends Component<CharacterCardsProps> {
  render() {
    const characters = this.props.characters
    return (
      <section id="character-cards">
        {characters.map((item) => (
          <CharacterCard item={item} key={item.name} />
        ))}
      </section>
    )
  }
}