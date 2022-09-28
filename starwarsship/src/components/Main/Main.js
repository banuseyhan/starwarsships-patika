import React from "react";
import { Template } from "../Template/Template";
import "./main.css";
export const Main = () => {
  return (
    <Template
      content={
        <div className="container main__container">
          <div className="main__description">
            <p className="main__description-text">
            A long time ago in a galaxy far, far away.. this is how the story begins. But it has become a philosophical view, not just a story. 
            In fact, we all have a dark side inside us. According to this philosophy, our dark sides are actually a tool that tries to make us good and helps us choose the right paths.
             In these stories, many starships are used to reach new hopes and new excitements. 
             If you are wondering, you can reach starships from the starhips tab. 
             May the force be with you
            </p>
          </div>
        </div>
      }
    />
  );
};
