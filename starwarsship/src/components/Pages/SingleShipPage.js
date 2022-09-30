import React, { useState } from "react";
import { LinksList } from "../Links/LinksList";
import { Template } from "../Template/Template";
import { useFetching } from "../../Hooks/UseFetching";
import { useParams } from "react-router-dom";
import CommonService from "../../Services/CommonService";
import "./singlepages.css";
import ShipService from "../../Services/ShipService";

export const SingleShipPage = () => {
  const [ship, setShip] = useState({});
  const [starShips, setStarships] = useState([]);
  const { id } = useParams();
  const [fetchSingleShip] = useFetching(async () => {
    const response = await ShipService.getSingleShip(id);
    const StarshipsRespone = await CommonService.getStarshipsOfItem(response);
    setShip(response.data);
    setStarships(StarshipsRespone.map((resp) => resp.data));
  });

  return (
    <Template
      content={
        <div className="single-ship__data">
          <LinksList
            data={starShips}
            className={"single-ship__starships ship__data-list"}
            basePath="starships"
          />
        </div>
      }
    />
  );
};