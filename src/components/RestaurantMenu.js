import { useState, useEffect, useParams } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setResData(jsonData.data);
  };
  if (resData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ||
    {};
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <p key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
