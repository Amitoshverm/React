import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info || null;
  return (
    <div className="p-4 m-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200 ">
      <img
        alt="res-logo"
        className="rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5>{cuisines.join(", ")} </h5>
      <h5>{costForTwo} </h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
