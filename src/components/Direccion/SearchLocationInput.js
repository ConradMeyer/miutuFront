import React, { useState, useEffect, useRef } from "react";
require('dotenv').config()

function SearchLocationInput(props) {
let autoComplete;

const [query, setQuery] = useState("");
const autoCompleteRef = useRef(null);

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      componentRestrictions: { country: "es" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      types: ["address"],
    }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>{
      handlePlaceSelect(updateQuery)
  }
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = await autoComplete.getPlace();
  const query = await addressObject.formatted_address;
  await updateQuery(query);
  const calle = addressObject.name.split(",")
  const position = { lat: addressObject.geometry.location.lat(), lng: addressObject.geometry.location.lng() }
  props.handlePosition(position)
  props.handleAddress(calle)

}

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
      );
    }, []);

    return (
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Introduce aquí tu dirección"
        value={query}
        className="adress"
      />
  );
}

export default SearchLocationInput;
