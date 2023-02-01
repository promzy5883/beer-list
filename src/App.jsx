import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetch from "./useFetch";
import { useState } from "react";

function App() {
  const [link, setLink] = useState(
    "https://api.punkapi.com/v2/beers?ids=|1|2|3|4|5|6|7|8|9"
  );
  const { data, error, loading } = useFetch(link);
  const datas = [
    data[0],
    data[1],
    data[2],
    data[3],
    data[4],
    data[5],
    data[6],
    data[7],
    data[8],
  ];
  if (error) console.log(error);
  if (loading) return <p>LOADING...</p>;
  return (
    <div className="App">
      <div className="logo">
        <h2>Beers</h2>
        <button className="filter">
          Filter
          <span
            className="span1"
            onClick={() => {
              setLink(
                "https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_gt=5"
              );
            }}
          >
            5% & above Alcoholic
          </span>
          <span
            className="span2"
            onClick={() => {
              setLink(
                "https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_lt=5"
              );
            }}
          >
            Below 5%
          </span>
        </button>
      </div>
      <div className="beers">
        {data?.map((value) => {
          return (
            <div key={value.id} className="beerBox">
              <div
                style={{ backgroundImage: `url(${value.image_url})` }}
                className="beerImg"
              ></div>
              <p className="beerName">{value.name}</p>
              <p className="beerTagline">{value.tagline}</p>
              <p className="beerDescription">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

//https://v2.jokeapi.dev/joke/Any {data?.setup + " " + data?.delivery}
