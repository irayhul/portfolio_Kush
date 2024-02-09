import React, { Fragment } from 'react'
import { Button, Typography } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import "./Card.css"
const Card = ({
  title = "Title Here",
  subtitle = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  return (
    <Fragment>
      <figure class="snip0053 red">
  <figcaption>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <div class="icons">
      <a href="#"><i class="ion-ios-home"></i></a>
      <a href="#"><i class="ion-ios-email"></i></a>
      <a href="#"><i class="ion-ios-telephone"></i></a>
    </div>
  </figcaption>
  <img src={image} alt="sample5" />
  <div class="position">Nutrition Expert</div>
  {isAdmin && 
  (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
       )}
</figure>
    </Fragment>
  )
}

export default Card