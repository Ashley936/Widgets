import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [value, setValue] = useState("programming");
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!value) return; //prevent change of debouncedVaule to null

    const timerId = setTimeout(() => setDebouncedValue(value), 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  //useEffect ends here

  /* Using two useEffects this way prevent re-rendering or
    re-fetching of data when same term is searched twice in succession.
    Bcz Search function is called only when value is different
    from the existing debouncedValue. */

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedValue,
        },
      });
      setResult(data.query.search);
      };
    
    search()
  }, [debouncedValue]);
  //second useEffect ends here

  const renderResult = result.map((data) => {
    return (
      <div
        className="item ui raised segment"
        key={data.pageid}
        style={{ padding: "20px" }}
      >
        <div className="right floated content">
          <a
            className="ui blue button"
            href={`https://en.wikipedia.org?curid=${data.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {data.title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.snippet }}
            style={{
              width: "75%",
              fontSize: "1.2rem",
              letterSpacing: "1px",
              fontFamily: "monospace",
            }}
          ></div>
        </div>
      </div>
    );
  }); //renderResult function ends here

  return (
    <div className="ui container">
      <div className="ui form segment">
        <div className="field">
          <div className="ui blue ribbon label">
            Enter Search Term
          </div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            
          />
        </div>
      </div>
      <div className="ui celled list">{renderResult}</div>
    </div>
  );
};

export default Search;
