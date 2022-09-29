import React, { useEffect, useState } from "react";
import { Template } from "../Template/Template";
import LinksList from "../Link/LinksList";
import { useParams } from "react-router-dom";
import { useFetching } from "../Hooks/useFetching";
import "./Detail.css"
import api from "../../API/api";

export const Detail = () => {
  const { id, pathItem } = useParams();
  const [data, setData] = useState({});

  const [starShips, setStarships] = useState([]);

  
  const [fetchSingleData] = useFetching(async () => {
    const dataResponse = await api.getSingleItem(id, pathItem);

    if (dataResponse.data.starships) {
      const starShipsResponse = await api.getStarshipsOfItem(dataResponse);
      setStarships(starShipsResponse.map((resp) => resp.data));
    }
    

    setData(dataResponse.data);
  });

  useEffect(() => {
    setStarships([]);

   
    fetchSingleData();
  }, []);

  return (
    <Template
      content={
        <div
          style={{ color: "white" }}
          className="container single-item__container"
        >
          <h1 className="single-item__title">{data?.name}</h1>
          <ul className="single-item__list">
            {Object.keys(data)?.map((key) => {
              if (
                typeof data[key] === "string" &&
                key !== "homeworld" &&
                key !== "created" &&
                key !== "edited" &&
                key !== "url"
              ) {
                return (
                  <li key={key} className="single-item__list-item">
                    <h2>{key.replace("_", " ")}:</h2>
                    {data[key]}
                  </li>
                );
              }
            })}
            
          </ul>

          {starShips.length > 0 && (
            <LinksList
              data={starShips}
              className={"single-item"}
              basePath="starships"
            />
          )}
        </div>
      }
    />
  );
};
