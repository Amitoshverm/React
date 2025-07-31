import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [listOffilteredRestaurant, setListOfFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6917326&lng=77.4933586&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering: rendring on the basis of condition is called conditional rendering
  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }

  const getStatus = useOnlineStatus();

  if (getStatus === false) {
    return <h1>No Internet !!</h1>;
  }

  console.log("rendering");

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the ui
              // search text
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-200 m-2 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4.4
              );
              console.log("button clicked");
              setListOfFilteredRestaurant(filteredList);
            }}>
            Top-Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOffilteredRestaurant?.length > 0 &&
          listOffilteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
