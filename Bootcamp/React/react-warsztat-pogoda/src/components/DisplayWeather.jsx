import { useEffect, useState } from "react";
import axios from "axios";
const DisplayWeather = () => {
  const [weather, setWeather] = useState([]);
  const [temporaryWeather, setTemporaryWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://danepubliczne.imgw.pl/api/data/synop")
      .then((response) => {
        setWeather(response.data);
        setTemporaryWeather(response.data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    setLoading(true);
  }, []);

  if (loading) {
    <p> Loading ...</p>;
  }

  if (error) {
    <p> This did not work : {error}</p>;
  }
  const handleSearch = (e) => {
    const searchedText = e.target.value.toLowerCase().trim();
    if (searchedText !== "") {
      const filteredArray = weather.filter((town) =>
        town.stacja.toLowerCase().includes(searchedText)
      );
      setTemporaryWeather(filteredArray);
    } else {
      setTemporaryWeather(weather);
    }
  };
  return (
    <div>
      <h2>Prognoza Pogody</h2>
      <label htmlFor="">Search:</label>{" "}
      <input type="text" onChange={handleSearch} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        {temporaryWeather.map((theWeather) => (
          <div
            style={{ border: "1px solid black", padding: "20px", width: "20%" }}
            key={theWeather.id_stacji}
          >
            <h4>{theWeather.stacja}</h4>
            <p>Temperatura: {theWeather.temperatura} C.</p>
            <p>cisnienie:{theWeather.cisnienie}hPa </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayWeather;
