import React, { useEffect, useState } from "react";
//hooks
import { useParams } from "react-router-dom";
import { useFetching } from "../../Hooks/UseFetching";
import { usePagesArray } from "../../Hooks/UsePagesArray";
//service
import CommonService from "../../Services/CommonService";
//pages
import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import { NotFound } from "../ErrorPages/NotFound";
import { LinksList } from "../Links/LinksList";
import { SearchForm } from "../SearchForm/SearchForm";
import { Template } from "../Template/Template";
import { Loader } from "../Extra/Loader/Loader";
import { Pagination } from "../Extra/Pagination/Pagination";
//css
import "./itempage.css";
export const ItemPage = () => {
  const { pathItem } = useParams();
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pagesArray = usePagesArray(totalItems);
  const [fetchItems, itemsLoading, itemsError] = useFetching(async () => {
    const response = await CommonService.getAllItems(
      pathItem,
      page,
      searchQuery
    );
    setData(response.data.results);
    setTotalItems(response.data.count);
  });

  useEffect(() => {
    fetchItems();
  }, [page, searchQuery, pathItem]);

  useEffect(() => {
    setSearchQuery("");
  }, [pathItem]);

  if (itemsError) {
    return <ErrorUrlPage />;
  }
  return (
    <Template
      content={
        itemsLoading ? (
          <Loader />
        ) : (
          <div className="container item__container">
            <SearchForm setQuery={setSearchQuery} />
            {data.length ? (
              <LinksList
                noTitle
                data={data}
                className={"item-list"}
                basePath={pathItem}
              />
            ) : (
              <NotFound />
            )}
            <Pagination
              pagesArray={pagesArray()}
              page={page}
              setPage={setPage}
            />
          </div>
        )
      }
    />
  );
};
