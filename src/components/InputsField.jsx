import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");


  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
let city_names = ["Madurai","Trichy","Coimbatore","Salem","Chennai","New york","Singapore","Malaysia","iceland"];
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location loaded!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
         <div>  <select onChange={(e) => setCity(e.currentTarget.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>select city</option>
  {city_names.map((item)=>(
    <option>{item}</option>
  ))}
 
</select></div>
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
       
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      
      </div>

 
    </div>
  );
}

export default Inputs;
