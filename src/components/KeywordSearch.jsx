import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useGlobalContext } from "../AppContext";

const KeywordSearch = () => {
  const { handleSearch } = useGlobalContext();
  const [keyword, setKeyword] = useState("");

  const submitSearch = () => {
    handleSearch(keyword);
    // setKeyword("");
  };

  return (
    <div className="w-full mt-10 relative">
      <input
        type="text"
        placeholder="Enter keyword to search..."
        className="w-full h-12 rounded-lg p-5 bg-gray-100 outline-none"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={submitSearch}>
        <SearchOutlinedIcon className="absolute right-2 md:right-5 top-3 text-purple-500" />
      </button>
    </div>
  );
};
export default KeywordSearch;
