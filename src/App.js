import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import NavigationBar from "./Components/NavigationBar";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./Pages/SingleProduct";

export const SendGameData = createContext(null);

function App() {
  const [gameData, setGameData] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://gamerpower.p.rapidapi.com/api/giveaways",
      headers: {
        "X-RapidAPI-Key": "877d367944msh58a352224a3aa72p14b78cjsn0973cb30f0c4",
        "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGameData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <SendGameData.Provider value={gameData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SendGameData.Provider>
    </div>
  );
}

export default App;
