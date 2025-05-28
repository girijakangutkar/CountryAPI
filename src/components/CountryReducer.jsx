import React from "react";
import { useState, useEffect, useReducer } from "react";
import "../styles/CountryRed.css";

function fetchCountryReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

function CountryReducer() {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(fetchCountryReducer, {
    data: "",
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchCountry();
  }, []);

  async function fetchCountry() {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch("https://api.first.org/data/v1/countries");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", error: error });
    }
  }

  return (
    <div className="contentDiv">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error.message}</p>}
      {state.data &&
        Object.keys(state.data)
          .filter((countryCode) =>
            state.data[countryCode].country
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((countryCode) => (
            <p key={countryCode}>{state.data[countryCode].country}</p>
          ))}
    </div>
  );
}

export default CountryReducer;
