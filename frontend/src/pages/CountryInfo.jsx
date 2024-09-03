import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import styles from "../styles/countryInfo.module.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function CountryInfo() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    async function fetchCountryInfo() {
      if (!code) {
        console.error("Country code is missing");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/country/info/${code}`
        );
        setCountry(response.data);
        setPopulationData(response.data.population || []);
      } catch (error) {
        console.error("Error fetching country info:", error);
      }
    }

    fetchCountryInfo();
  }, [code]);

  const chartData = {
    labels: populationData.map((data) => data.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((data) => data.value),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      {country ? (
        <>
          <img
            src={country.flag}
            alt={`${country.commonName} flag`}
            className={styles.flag}
          />
          <h1 className={styles.header}>{country.commonName}</h1>
          <div className={styles.borderCountries}>
            <h2>Border Countries</h2>
            <ul>
              {country.borders.map((border) => (
                <li key={border.countryCode} className={styles.borderItem}>
                  <Link
                    to={`/country/info/${border.countryCode}`}
                    className={styles.borderLink}
                  >
                    {border.commonName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h2>Population Chart</h2>
          <Line data={chartData} />
        </>
      ) : (
        <p>Loading info...</p>
      )}
    </div>
  );
}

export default CountryInfo;
