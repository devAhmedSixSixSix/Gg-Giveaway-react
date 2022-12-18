import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleNews() {
  const id = useParams();
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://gamerpower.p.rapidapi.com/api/latestnews/${id.id}`,
      headers: {
        "X-RapidAPI-Key": "877d367944msh58a352224a3aa72p14b78cjsn0973cb30f0c4",
        "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewsData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {/* <img
        src={newsData && newsData.main_image}
        alt={newsData && newsData.title}
      />
      <p>{newsData && newsData.article_content}</p> */}
    </div>
  );
}

export default SingleNews;
