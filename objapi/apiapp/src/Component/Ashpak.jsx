import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Ashpak = () => {
  const [list, setList] = useState([]);
  const [meta, setmeta] = useState([]);

  const getData = async () => {
    const obj = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    )
    setList(obj.data["Time Series (5min)"]);
    setmeta(obj.data["Meta Data"]);
 
  }
  const key=Object.keys(list)
  const metadata = Object.keys(meta);
  console.log(metadata);

    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
      <h1>Ahspak</h1>
      <table border="2px solid black">
        <tr>
          <th>1. Information</th>
          <th>2. Symbol</th>
          <th>3. Last Refreshed</th>
          <th>4. Interval</th>
          <th>5. Output Size</th>
          <th>6. Time Zone</th>
        </tr>
        <tr>
          <td>{meta["1. Information"]}</td>
          <td>{meta["2. Symbol"]}</td>
          <td>{meta["3. Last Refreshed"]}</td>
          <td>{meta["4. Interval"]}</td>
          <td>{meta["5. Output Size"]}</td>
          <td>{meta["6. Time Zone"]}</td>
        </tr>
      </table>
      <table border="2px solid black">
        <tr>
          <th>1. open</th>
          <th>2. high</th>
          <th>3. low</th>
          <th>4. close</th>
          <th>5. volume</th>
        </tr>
        {key.map((item) => (
          <tr>
            <td>{list[item]["1. open"]}</td>
            <td>{list[item]["2. high"]}</td>
            <td>{list[item]["3. low"]}</td>
            <td>{list[item]["4. close"]}</td>
            <td>{list[item]["5. volume"]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
