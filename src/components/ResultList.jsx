import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import { useGlobalContext } from "../AppContext";
import { useRef } from "react";

const ResultList = () => {
  const { searchResult, theme } = useGlobalContext();
  const { phonetic } = useGlobalContext();
  const { audio } = useGlobalContext();
  const { meanings } = useGlobalContext();

  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1
            className={`${
              theme === "dark" && "text-white"
            } font-bold md:text-7xl sm:text-6xl text-3xl`}
          >
            {searchResult[0]?.word}
          </h1>
          <h1 className="text-purple-600 mt-5">{phonetic}</h1>
        </div>
        <div>
          <button>
            <audio ref={audioRef} src={audio} />
            <PlayCircleFilledOutlinedIcon
              className="text-purple-600"
              onClick={playAudio}
            />
          </button>
        </div>
      </div>
      <div>
        {meanings.map((meaning, index) => {
          const { partOfSpeech, definitions, synonyms, antonyms } = meaning;
          return (
            <div key={index} className="flex flex-col justify-evenly mt-5">
              <h1
                className={`${
                  theme === "dark" && "text-white"
                } font-bold mt-5 text-2xl`}
              >
                {partOfSpeech
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h1>
              <h1
                className={`${
                  theme === "dark" && "text-gray-200"
                } mt-5 font-bold text-gray-400`}
              >
                Meaning
              </h1>
              <div className="ml-10 text-justify mt-5">
                <ul>
                  {definitions.map((def, index) => {
                    const { definition } = def;
                    return (
                      <li
                        key={index}
                        className={`${
                          theme === "dark" && "text-white"
                        } list-disc list-outside`}
                      >
                        {definition}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center mt-5 font-bold">
                {synonyms.length > 0 && (
                  <h1
                    className={`${
                      theme === "dark" && "text-gray-200"
                    } font-bold text-gray-400`}
                  >
                    Synonyms:
                  </h1>
                )}
                {synonyms.length > 0 && (
                  <h1 className="text-purple-600 text-xl">
                    &nbsp;&nbsp;{synonyms[0]}
                  </h1>
                )}
              </div>
              <div className="flex items-center mt-5 font-bold">
                {antonyms.length > 0 && (
                  <h1
                    className={`${
                      theme === "dark" && "text-gray-200"
                    } font-bold text-gray-400`}
                  >
                    Antonyms:
                  </h1>
                )}
                {antonyms.length > 0 && (
                  <h1 className="text-purple-600 text-xl">
                    &nbsp;&nbsp;{antonyms[0]}
                  </h1>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <a href={searchResult[0]?.sourceUrls[0]} className="underline-offset-2">
          {searchResult[0]?.sourceUrls[0]}
        </a>
      </div>
    </div>
  );
};
export default ResultList;
