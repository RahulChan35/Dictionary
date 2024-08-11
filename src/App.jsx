import { useState } from "react";
import { useGlobalContext } from "./AppContext";
import KeywordSearch from "./components/KeywordSearch";
import Navbar from "./components/Navbar";
import ResultList from "./components/ResultList";
import { useEffect } from "react";

const App = () => {
  const { theme, font } = useGlobalContext();
  const [ft, setFt] = useState("");
  useEffect(() => {
    if (font === "serif") {
      setFt("font-serif");
    } else if (font === "sans-serif") {
      setFt("font-sans");
    } else if (font === "monospace") {
      setFt("font-mono");
    }
  }, [font]);
  return (
    <div
      className={`${theme === "dark" && "bg-black"} ${
        ft === "" ? font : ft
      } w-full h-full`}
    >
      <div className="flex flex-col w-3/4 md:w-1/2 m-auto">
        <Navbar />
        <KeywordSearch />
        <ResultList />
      </div>
    </div>
  );
};
export default App;
