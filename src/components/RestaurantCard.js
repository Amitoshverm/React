import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info || null;
  return (
    <div className="res-card">
      <div>
        <img
          alt="res-logo"
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")} </h5>
        <h5>{costForTwo} </h5>
        <h5>{avgRating} stars</h5>
        <h5>{sla?.deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
