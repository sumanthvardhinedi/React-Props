import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="ani"
      img="https://i.pinimg.com/736x/c2/01/2b/c2012bc4e987e17cfca00873f3b24b6e.jpg"
      tel="+91 99999999"
      email="ani@rudh"
    />

    <Card
      name="beyoce"
      img="https://blackhistorywall.wordpress.com/wp-content/uploads/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+91 88888888"
      email="b@gmail"
    />
  </div>,
  document.getElementById("root")
);
