import React from "react";
import FoundThing from "./FoundThing";
import "./FoundItemsPage.css"

const FoundItemsPage = props =>{
    return (
        <React.Fragment>
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

                /><FoundThing
                id={props.items[9].id}
                    name ={props.items[9].name}
                    color= {props.items[9].color}
                    date = {props.items[9].date}
                    location = {props.items[9].location}

                />
                <FoundThing
                    id={props.items[10].id}
                    name ={props.items[10].name}
                    color= {props.items[10].color}
                    date = {props.items[10].date}
                    location = {props.items[10].location}

                />
                 <FoundThing
                    id={props.items[11].id}
                    name ={props.items[11].name}
                    color= {props.items[11].color}
                    date = {props.items[11].date}
                    location = {props.items[11].location}

                />

                

            </div>
        </React.Fragment>
    )
};
export default FoundItemsPage;