import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksRounded";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useGlobalContext } from "../AppContext";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme, changeFont } = useGlobalContext();
  const [font, setFont] = useState("serif");
  return (
    <div className="flex justify-between items-center mt-10">
      <div>
        <LibraryBooksOutlinedIcon className="text-gray-400" />
      </div>
      <div className="flex justify-between w-52">
        <div className="border-r border-r-gray-400">
          <select
            name="fonts"
            id="font-select"
            className={`${theme === "dark" && "bg-black text-white"} mr-5`}
            value={font}
            onChange={(e) => {
              setFont(e.target.value);
              changeFont(e.target.value);
            }}
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>
        <div className="flex justify-between w-16">
          <button>
            {theme === "dark" ? (
              <ToggleOnOutlinedIcon
                onClick={toggleTheme}
                className={`${theme === "dark" && "bg-black text-white"}`}
              />
            ) : (
              <ToggleOffOutlinedIcon
                onClick={toggleTheme}
                className={`${theme === "light" && "bg-white text-black"}`}
              />
            )}
          </button>
          <button>
            {theme === "dark" ? (
              <WbSunnyOutlinedIcon
                onClick={toggleTheme}
                className={`${theme === "dark" && "bg-black text-white"}`}
              />
            ) : (
              <DarkModeOutlinedIcon
                onClick={toggleTheme}
                className={`${theme === "light" && "bg-white text-black"}`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
