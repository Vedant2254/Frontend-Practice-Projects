import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setGeolocation, setInitial } from "../redux/ducks/geoLocation";

function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleOnChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_TOKEN}&ipAddress=${value}&domain=${value}`;
    let res = null;
    try {
      res = await axios.get(url);
    } catch (err) {
      dispatch(setInitial());
      return;
    }
    dispatch(setGeolocation(res.data));
  }

  return (
    <form onSubmit={handleSubmit} className="domain-form">
      <input
        type="text"
        name="ip-address"
        id="ip-address"
        className="domain-input"
        value={value}
        placeholder="Search for IP or Domain or leave blank to view your IP data"
        onChange={handleOnChange}
      />
      <button type="submit" className="domain-submit-btn">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"}
          alt=""
          className="domain-submit-btn-icon"
        />
      </button>
    </form>
  );
}

export default Search;
