import React, { useEffect, useState } from "react";
import axios from "axios";
const Convert = ({ lang, text }) => {
  const [value, setValue] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    if (text) {
      const timerId = setTimeout(() => setDebouncedText(text), 500);
      return () => clearTimeout(timerId);
    }
  }, [text]);

  useEffect(() => {
    const onTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: lang,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setValue(data.data.translations[0].translatedText);
      };
      onTranslate();
  }, [debouncedText,lang]);

  return <h1 className="ui header">{value}</h1>;
};

export default Convert;
