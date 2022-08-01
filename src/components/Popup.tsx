import React, { useState } from "react";
import "../style/popup.css";

interface popupData {
  saveNewData: (value: string) => void;
}

const Popup: React.FC<popupData> = ({ saveNewData }) => {
  const [value, setValue] = useState<string>("");

  const handleChangeText = (e: React.FormEvent) => {
    // console.log(e.target.value);
    setValue((e.target as HTMLTextAreaElement).value);
  };

  return (
    <>
      <div className="popup">
        <h3>Describe your travel experience</h3>
        <div className="popup__input">
          <input
            value={value}
            onChange={handleChangeText}
            className="popup__input-change"
            type="text"
          />
          <button
            onClick={() => saveNewData(value)}
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
