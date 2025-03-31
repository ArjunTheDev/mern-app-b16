import React, { useState } from "react";
import axios from "axios";
import '../assets/css/flag.css';

const APIExample = () => {
  const [country, setCountry] = useState("");
  const [flagUrl, setFlagUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFlag = async () => {
    if (!country) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const flag = response.data[0]?.flags?.png;
      setFlagUrl(flag);
    } catch (err) {
      setError("Country not found");
      setFlagUrl(null);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="title">Country Flag Finder</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="input"
      />
      <button className="button" onClick={fetchFlag} disabled={loading}>
        {loading ? "Loading..." : "Get Flag"}
      </button>
      {error && <p className="error">{error}</p>}
      {flagUrl && <img src={flagUrl} alt="Country Flag" className="flag" />}
    </div>
  );
};

export default APIExample;
