import React, { useEffect, useState } from "react";
import "../style/App.css";

import CardList from "./cardList";
import NewCard from "./NewCard";
import { Card } from "./interface";
import Popup from "./Popup";

const picURL = `https://picsum.photos/seed/picsum/350/200`;

const App: React.FC = () => {
  const [postCard, setPostCard] = useState<Card[]>([]);
  const [popup, setPopup] = useState<Boolean>(false);
  console.log(postCard);

  const cardAddHandler = (text: string) => {
    const index = Math.floor(Math.random() * 999);
    setPostCard((prevState) => [
      ...prevState,
      {
        id: index,
        text: text,
        pic: picURL,
        data: new Date().toLocaleDateString(),
      },
    ]);
  };

  const postDeleteHandler = (postId: number) => {
    setPostCard((prevState) => {
      return prevState.filter((item) => item.id !== postId);
    });
  };

  const handleEditText = (id: number) => {
    let postUpdateIndex: number = postCard.findIndex((card) => card.id === id);

    const Item = [...postCard];
    Item.splice(postUpdateIndex, 1);
    setPostCard(Item);
    setPopup(true);
  };

  useEffect(() => {
    setPostCard(() => [
      {
        id: 0,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ullam eligendi rerum expedita alias delectus corporis libero mollitia !",
        pic: picURL,
        data: new Date().toLocaleDateString(),
      },
    ]);
  }, []);

  const handleSubmitNewData = (value: string) => {
    if (!value) return alert("Type something");
    setPopup(false);

    setPostCard((prevState) => [
      ...prevState,
      {
        id: Math.random() * 999,
        text: value,
        pic: picURL,
        data: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <NewCard onAddCard={cardAddHandler} />
        <CardList
          deletePost={postDeleteHandler}
          items={postCard}
          editText={handleEditText}
        />
        {popup ? <Popup saveNewData={handleSubmitNewData} /> : null}
      </div>
    </>
  );
};

export default App;
