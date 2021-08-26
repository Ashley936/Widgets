import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
import "./Main.css";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript Library.",
  },
  {
    title: "Why use React?",
    content: "React is a very famous library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "Cherry red",
    value: "red",
  },
  {
    label: "Parrot green",
    value: "green",
  },
  {
    label: "A shade of dark blue",
    value: "dark blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelected={setSelected}
          label="color"
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
