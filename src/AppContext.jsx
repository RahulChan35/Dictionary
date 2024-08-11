/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export let th = "";

const AppContext = ({ children }) => {
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [searchResult, setSearchResult] = useState([]);
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [font, setFont] = useState("font-serif");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const url = apiUrl + "dictionary";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
        data[0]?.phonetics?.map((phonetic) => {
          const { text, audio } = phonetic;
          if (text && audio) {
            setPhonetic(text);
            setAudio(audio);
          }
        });
        setMeanings(data[0]?.meanings);
      });
  }, []);

  const handleSearch = (keyword) => {
    const url = apiUrl + keyword;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
        data[0]?.phonetics?.map((phonetic) => {
          const { text, audio } = phonetic;
          if (text && audio) {
            setPhonetic(text);
            setAudio(audio);
          }
          setMeanings(data[0]?.meanings);
        });
      });
  };

  const changeFont = (fontFamily) => {
    setFont(fontFamily);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      th = "dark";
    } else {
      setTheme("light");
      th = "light";
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchResult,
        handleSearch,
        phonetic,
        audio,
        meanings,
        theme,
        toggleTheme,
        font,
        changeFont,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
