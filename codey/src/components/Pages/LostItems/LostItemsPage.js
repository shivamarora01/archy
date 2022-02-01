import React from "react";
import LostThing from "./LostThing";
import './LostItemsPage.css';

const LostItemsPage = props =>{
    return (
        <React.Fragment>
            {/* <div>
                Recently Lost Items
            </div> */}
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
                <LostThing
                id = {props.items[3].id}

                    name ={props.items[3].name}
                    color= {props.items[3].color}
                    date = {props.items[3].date}
                    location = {props.items[3].location}

                />
                <LostThing
                    id = {props.items[4].id}
                    name ={props.items[4].name}
                    color= {props.items[4].color}
                    date = {props.items[4].date}
                    location = {props.items[4].location}

                />
                { <LostThing
                    id = {props.items[5].id}
                    name ={props.items[5].name}
                    color= {props.items[5].color}
                    date = {props.items[5].date}
                    location = {props.items[5].location}

                />/*
                <LostThing
                    id = {props.items[6].id}
                    name ={props.items[6].name}
                    color= {props.items[6].color}
                    date = {props.items[6].date}
                    location = {props.items[6].location}

                /> */}
               

            </div>
        </React.Fragment>
    )
};
export default LostItemsPage;