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
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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
