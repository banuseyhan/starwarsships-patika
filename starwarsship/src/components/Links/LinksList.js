import React from "react";
import { UniversalLink } from "./UniversalLink";

export const LinksList = ({ data, className, basePath, ship }) => {
  return (
    <div className={className}>
      <ul className={`${className}-list`}>
        {data.map((item) => {
          return (
            <UniversalLink
              key={item.url}
              ship={ship}
              basePath={basePath}
              item={item}
              className={className}
            />
          );
        })}
      </ul>
    </div>
  );
};
