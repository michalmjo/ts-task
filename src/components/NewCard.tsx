import React, { useRef, useState } from "react";
import "../style/newCard.css";

type NewCardProps = {
  onAddCard: (cardText: string) => void;
};

const NewCard: React.FC<NewCardProps> = ({ onAddCard }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [cardValue, setCardValue] = useState<string>("");
  const cardSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardValue.length < 3)
      return alert("Card must contain at least 3 character");
    console.log(cardValue);
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    onAddCard(enteredText);
    setCardValue("");
  };

  const handleChangeValue = (e: React.FormEvent) => {
    setCardValue((e.target as HTMLTextAreaElement).value);
  };

  return (
    <>
      <form onSubmit={cardSubmitHandler}>
        <div>
          <label htmlFor="card-list"></label>
          <input
            placeholder="Write something...."
            value={cardValue}
            onChange={handleChangeValue}
            className="card-input"
            type="text"
            id="card-list"
            ref={textInputRef}
          />
        </div>
        <button type="submit">ADD CARD</button>
      </form>
    </>
  );
};

export default NewCard;
