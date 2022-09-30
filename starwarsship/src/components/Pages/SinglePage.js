import React, { useEffect, useState } from "react";
import { Template } from "../Template/Template";
import { LinksList } from "../Links/LinksList";
import { useParams } from "react-router-dom";
import { useFetching } from "../../Hooks/UseFetching";
import CommonService from "../../Services/CommonService";
import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import { Loader } from "../Extra/Loader/Loader";

export const SinglePage = () => {
  const { id, pathItem } = useParams();
  const [data, setData] = useState({});
  const [starShips, setStarships] = useState([]);
  const [fetchSingleData, isDataLoaing, isDataError] = useFetching(async () => {
    const dataResponse = await CommonService.getSingleItem(id, pathItem);

    if (dataResponse.data.starships) {
      const starShipsResponse = await CommonService.getStarshipsOfItem(
        dataResponse
      );
      setStarships(starShipsResponse.map((resp) => resp.data));
    }

    setData(dataResponse.data);
  });

  useEffect(() => {
    setStarships([]);

    fetchSingleData();
  }, [pathItem, id]);

  if (isDataError) {
    console.log(isDataError);
    return <ErrorUrlPage />;
  }

  return (
    <Template
      content={
        isDataLoaing ? (
          <Loader />
        ) : (
          <div
            style={{ color: "white" }}
            className="container single-item__container"
          >
            <h1 className="single-item__title">{data?.name}</h1>
            <ul className="single-item__list">
              {Object.keys(data)?.map((key) => {
                if (
                  typeof data[key] === "string" &&
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
        )
      }
    />
  );
};
