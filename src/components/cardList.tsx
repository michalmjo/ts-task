import React from "react";
import "../style/cardList.css";
import { cardsInterface } from "./interface";

const CardList: React.FC<cardsInterface> = (props) => {
  const { deletePost, editText } = props;

  return (
    <>
      <ul>
        {props.items.map((card) => (
          <li key={card.id}>
            <h2 className="title">Postcard</h2>
            <p>{card.title}</p>
            <span className="text">{card.text}</span>
            <button onClick={() => editText(card.id)}>Change Text</button>
            <div className="pic">
              <img src={card.pic} alt="somePhoto" />
            </div>
            <div className="data">Picture was made {card.data}</div>
            <button onClick={() => deletePost(card.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardList;
