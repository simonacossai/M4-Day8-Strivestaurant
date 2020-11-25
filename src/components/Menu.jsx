import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {!dishes && <h1>Work in progress</h1>}
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
  </Container>
);
export default Menu;
