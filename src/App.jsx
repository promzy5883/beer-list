import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetch from "./useFetch";
import { useState } from "react";

function App() {
  const [link, setLink] = useState(
    "https://api.punkapi.com/v2/beers?ids=|1|2|3|4|5|6|7|8|9"
  );
  const [switchOn, setSwitchOn] = useState(null);
  const { data, error, loading } = useFetch(link);
  const [left, setLeft] = useState(0);
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

  function switched() {
    if (switchOn === null || switchOn === false) {
      setSwitchOn(true);
      setLeft(50);
      setLink(
        "https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_gt=5"
      );
    } else if (switchOn === true) {
      setSwitchOn(false);
      setLeft(0);
      setLink(
        "https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_lt=5"
      );
    }
  }
  if (error) console.log(error);

  return (
    <div className="App">
      <div className="logo">
        <h2>Beers</h2>
        <div className="switch" onClick={switched}>
          <div style={{ left: `${left}%` }} className="circle"></div>
        </div>
      </div>
      {loading && <p>LOADING...</p>}
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

//"https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_gt=5"
//"https://api.punkapi.com/v2/beers?ids=1|2|3|4|5|6|7|8|9&abv_lt=5"
