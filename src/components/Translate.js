import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui container">
        <div className="ui form segment">
          <div className="field">
            <div className={`ui ribbon label`}>Enter text</div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelected={setLanguage}
        label="language"
      />

      <div className="ui container">
        <div className="ui form segment">
          <div className="field">
            <div className={`ui ribbon label`}>Output</div>
            <Convert lang={language.value} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
