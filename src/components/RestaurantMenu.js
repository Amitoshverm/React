import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestrauntMenu(resId);

  const { name, cuisines, avgRating, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ||
    {};
  // console.log(resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  if (resData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        {/* categories accordion */}
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}

        {/* <div className="flex justify-center mb-2">
          <p className="font-bold text-gray-600">{cuisines.join(", ")}</p>
        </div>
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
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
