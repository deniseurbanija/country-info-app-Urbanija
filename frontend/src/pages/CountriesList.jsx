import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/countriesList.module.css";

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get(
          "http://localhost:3000/country/available"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Country List</h1>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <li key={country.countryCode} className={styles.countryItem}>
            <Link
              to={`/country/info/${country.countryCode}`}
              className={styles.countryLink}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
