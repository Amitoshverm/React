import React from "react";
import ReactDOM from "react-dom/client";

/*
 *  Header - >
 *             Logo, nav Items(home, about, cart)
 *  Body ->
 *            search input,
 *            Restaurant container->
 *                                  restaurant card->
 *                                              image
 *                                              Name of restaruant, stars, cousines, eta
 *  Footer ->
 *            copyright
 *            links
 *            Address
 *            Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/500p/95/89/elegant-kitchen-logo-spatula-tie-vector-30219589.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div>
        <img
          alt="res-logo"
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv"
        />
        <h4>Meghana Foods</h4>
        <h5>Biryani, Andhara, south</h5>
        <h5>4.6 ratings</h5>
        <h5>15-20 mins</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
