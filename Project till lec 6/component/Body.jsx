import { useState } from "react";
import { restaurantList } from "./config";
import RestrauCard from "./RestaurantCard";

// now we have to apply the filter algorithm
function FilterData(searchText,restaurants){
  restaurants.filter((restaurants)=>restaurants.data.name.include(searchText))
  
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //  need to filter the data update the state restaurant
            const data=FilterData(searchText,restaurants)
            setRestaurants(data)
          }}
        >
          Search
        </button>

      </div>

      <div className="cardInfo">
        {/* how the map function work  */}
        {restaurants.map((restaurant) => {
          return <RestrauCard key={...restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};
export default Body;