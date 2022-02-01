import React from "react";
import FoundThing from "./FoundThing";
import "./FoundItemsPage.css";

const FoundItemsAtHome = (props) => {
  return (
    <React.Fragment>
      <div className="foundItemsHomeContainer">
        <div className="heading">
          <h2>Recently Found Items</h2>
        </div>
        <div className="foundItemsContainer">
        <FoundThing
                    id={props.items[6].id}
                    name ={props.items[6].name}
                    color= {props.items[6].color}
                    date = {props.items[6].date}
                    location = {props.items[6].location}
                    // imageSource = {props.items[0].imageSource}

                />
                <FoundThing
                    id={props.items[7].id}
                    name ={props.items[7].name}
                    color= {props.items[7].color}
                    date = {props.items[7].date}
                    location = {props.items[7].location}

                />
                <FoundThing
                    id={props.items[8].id}
                    name ={props.items[8].name}
                    color= {props.items[8].color}
                    date = {props.items[8].date}
                    location = {props.items[8].location}

                />
        </div>
      </div>
    </React.Fragment>
  );
};
export default FoundItemsAtHome;
