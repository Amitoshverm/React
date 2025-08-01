import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestrauntMenu(resId);

  const { name, cuisines, avgRating, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ||
    {};
  // console.log(itemCards);

  if (resData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2">
        <h1 className="font-bold text-2xl mb-4 text-center">{name}</h1>
        <div className="flex justify-center mb-2">
          <p className="font-bold text-gray-600">{cuisines.join(", ")}</p>
        </div>

        <p className="text-gray-500 text-center mb-2">{costForTwoMessage}</p>
        <p className="text-yellow-500 text-center mb-4">{avgRating} stars</p>
        <h2 className="font-bold text-lg mb-4 text-center">Menu</h2>
        <ul className="space-y-2">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">{item.card.info.name}</span>
              <span className="text-gray-500">
                Rs.{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
