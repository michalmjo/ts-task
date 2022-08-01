import React, { useState } from "react";
import "../style/popup.css";

interface popupData {
  saveNewData: (value: string, postcarName: string) => void;
}

const Popup: React.FC<popupData> = ({ saveNewData }) => {
  const [textValue, setTextValue] = useState<string>("");
  const [postcarName, setPostcarName] = useState<string>("");

  const handleChangeText = (e: React.FormEvent) => {
    // console.log(e.target.value);

    setTextValue((e.target as HTMLTextAreaElement).value);
  };
  const handleChangeTextPostcart = (e: React.FormEvent) => {
    // console.log(e.target.value);
    setPostcarName((e.target as HTMLTextAreaElement).value);
  };

  return (
    <>
      <div className="popup">
        <h3>Describe your travel experience</h3>
        <div className="popup__input">
          <label>City</label>
          <input
            value={postcarName}
            onChange={handleChangeTextPostcart}
            className="popup__input-change"
            type="text"
          />
          <label>Postcard message</label>
          <input
            value={textValue}
            onChange={handleChangeText}
            className="popup__input-change"
            type="text"
          />
          <button
            onClick={() => saveNewData(textValue, postcarName)}
            className="popup__input--btn"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};
export default Popup;
