import React from "react";
import LostThing from "./LostThing";
import "./LostItemsPage.css";

const LostItemsAtHome = (props) => {
  return (
    <React.Fragment>
      <div className="lostItemsHomeContainer">
        <div className="heading">
          <h2>Recently Lost Items</h2>
        </div>
        <div className="lostItemsContainer">
        <LostThing
                    id = {props.items[0].id}
                    name ={props.items[0].name}
                    color= {props.items[0].color}
                    date = {props.items[0].date}
                    location = {props.items[0].location}
                    imageSource = {props.items[0].imageSource}

                />
                <LostThing
                    id = {props.items[1].id}
                    name ={props.items[1].name}
                    color= {props.items[1].color}
                    date = {props.items[1].date}
                    location = {props.items[1].location}

                />
                <LostThing
                    id = {props.items[2].id}
                    name ={props.items[2].name}
                    color= {props.items[2].color}
                    date = {props.items[2].date}
                    location = {props.items[2].location}

                />
        </div>
      </div>
    </React.Fragment>
  );
};
export default LostItemsAtHome;
