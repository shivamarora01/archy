import React from "react";
import LostThingDate from "./FindDate";
import "./Card.css";
import img1 from "../../media/16.jpg";
import img2 from "../../media/2.JPG";
import img3 from "../../media/3.JPG";
import img4 from "../../media/4.jpg";
import img5 from "../../media/5.jpg";
import img6 from "../../media/7.jpg";
import img7 from "../../media/8.jpg";
import img8 from "../../media/9.jpg";
import img9 from "../../media/10.jpg";
import img10 from "../../media/11.jpg";
import img11 from "../../media/12.jpg";
import img12 from "../../media/13.jpg";
import img13 from "../../media/14.jpg";
// import img14 from "../../media/15.jpg";
// import img15 from "../../media/16.jpg";

import Button from "./Button";


const Card = (props) => {
  // const classes = "card " + props.className;
  let imageSource=img4;
if (props.id=="e3"){
    imageSource=img13;
}

else if (props.id=="e1"){
    imageSource=img5;
}
// else if (props.id=="e4"){
//   imageSource=img4;
// }
// else if (props.id=="e5"){
//   imageSource=img5;
// }
else if (props.id=="e4"){
  imageSource=img11;
}
else if (props.id=="e5"){
  imageSource=img7;
}
else if (props.id=="e2"){
  imageSource=img6;
}
else if (props.id=="e6"){
  imageSource=img1;
}
else if (props.id=="e7"){
  imageSource=img10;
}
else if (props.id=="e8"){
  imageSource=img11;
}
else if (props.id=="e9"){
  imageSource=img12;
}
else if (props.id=="e10"){
  imageSource=img13;
}
else if (props.id=="e11"){
  imageSource=img9;
}
else if (props.id=="e12"){
  imageSource=img8;
}


  return (
    <div className="column">
      <div className="card">

        <div className="cardImage">
          <img  src={imageSource}  />
        </div>
        <div className="cardContent">
          <div className="features">
            <ul>
              <li>
                <span>Item-</span> {props.name}
              </li>
              <li>
                <span>Color-</span> {props.color}
              </li>
              <li>
                <span>Date-</span> <LostThingDate date={props.date} />{" "}
              </li>
              <li>
                <span>Location-</span> {props.location}
              </li>
            </ul>
          </div>
          {/* <Button >Contact</Button> */}
          <a href="#" className="btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
