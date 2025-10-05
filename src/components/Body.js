import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9578317&lng=77.703804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards
          ?.map(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          ?.find(Boolean) || [];

      setAllRestaurants(restaurants);
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setAllRestaurants([]);
      setListOfRestaurants([]);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => {
            const filteredRestaurant = allRestaurants.filter((res) => 
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(filteredRestaurant);
          }}>
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              res => res?.info?.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
          }}
        >
          Show All
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
