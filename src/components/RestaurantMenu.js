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
    <div className="">
      <div className="flex flex-wrap p-4 m-4 w-[600px] bg-gray-100 rounded-lg">
        <h1 className="font-bold">{name}</h1>
        <div className="flex">
          <p className="font-bold">{cuisines}</p>
        </div>

        <p>{costForTwoMessage}</p>
        <p>{avgRating} stars</p>
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
    </div>
  );
};
export default RestaurantMenu;
