import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTO_COMPLETE_API } from "../utils/constants";
import { catchResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  // Debouncing Function
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchsuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  
  const getSearchsuggestion = async () => {
    console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_AUTO_COMPLETE_API + searchQuery);
    const json = await data.json();
    // console.log(json)
    setsuggestions(json[1]);

    // Update Cache in store
    dispatch(
      catchResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHanderler = () => {
    dispatch(ToggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHanderler()}
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkNCPmtkH_FfKY-fOPP4pNpAFqShbeyM4gg&s"
          alt="menu"
        />

        <img
          className="h-9 mx-6"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="Yt-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-1"
            placeholder="Search"
            type="text"
            name=""
            id=""
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-1 w-16 bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg border border-gray-100 rounded-2xl">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex py-2  hover:bg-gray-200">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoSjXloy3g-EveFQsOncVj0H_Y1N-m3oInsfJeSkRQbc8do6UHOmmH1tT-ZK9PNlK2w4&usqp=CAU"
                    className="h-5 m-1 p-1"
                  ></img>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <img
          className="h-8"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt="Profile-icon"
        />
      </div>
    </div>
  );
};

export default Head;
