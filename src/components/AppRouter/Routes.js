import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import { ItemPage } from "../Pages/ItemPage/ItemPage";
import { MainPage } from "../Pages/MainPage/MainPage";
import { SingleShipPage } from "../Pages/SingleShipPage";
import { SinglePage } from "../Pages/SinglePage/SinglePage";

export const RoutesArray = [
  { path: "/", element: MainPage, exact: true },
  { path: "/:pathItem", element: ItemPage, exact: true },
  { path: "/ships/:id", element: SingleShipPage, exact: true },
  { path: "*", element: ErrorUrlPage, exact: true },
  { path: "/:pathItem/:id", element: SinglePage, exact: true },
];
