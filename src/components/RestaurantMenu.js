import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestrauntMenu(resId);

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
  );
};
export default RestaurantMenu;

// MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
