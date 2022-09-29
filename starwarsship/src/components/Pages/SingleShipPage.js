import React, { useState } from "react";
import { LinksList } from "../Links/LinksList";
import { Template } from "../Template/Template";
import { useFetching } from "../../Hooks/UseFetching";

import { useParams } from "react-router-dom";
import CommonService from "../../Services/CommonService";
import { Loader } from "../Ui/Loader/Loader";

import "./singlepages.css";
import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import ShipService from "../../Services/ShipService";
export const SingleShipPage = () => {
  const [ship, setShip] = useState({});

  const [starShips, setStarships] = useState([]);
  const { id } = useParams();
  const [fetchSingleShip, isFilmLoading, isFilmError] = useFetching(
    async () => {
      const response = await ShipService.getSingleShip(id);

      const StarshipsRespone = await CommonService.getStarshipsOfItem(response);

      setShip(response.data);

      setStarships(StarshipsRespone.map((resp) => resp.data));
    }
  );

  if (isFilmError) {
    return <ErrorUrlPage />;
  }

  return (
    <Template
      content={
        isFilmLoading ? (
          <Loader />
        ) : (
          <div className="single-ship__data">
            <LinksList
              data={starShips}
              className={"single-ship__starships ship__data-list"}
              basePath="starships"
            />
          </div>
        )
      }
    />
  );
};
