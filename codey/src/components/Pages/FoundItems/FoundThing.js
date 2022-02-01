import React from "react";
import Card from '../../UI/Card';

const FoundThing = props =>{
    return (
        <Card name = {props.name}
            color={props.color}
            date = {props.date}
            location={props.location}
            id={props.id}

        />
            
    )
};

export default FoundThing;   