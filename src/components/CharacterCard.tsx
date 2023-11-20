import { Component } from "react";
import { Character } from "../character-data";

type CharacterCardProps = {
  item : Character
}

export class CharacterCard extends Component<CharacterCardProps> {
  render() {
    const item = this.props.item;
    return (
      <div className="card" key={item.name}>
        <div className="card-titles">
          <h3>{item.name}</h3>
          <h4>{item.nickName}</h4>
        </div>
        <img src={item.imageUrl} alt="profile img" />
        <p>{item.background}</p>
      </div>
    );
  }
}