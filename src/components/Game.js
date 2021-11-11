import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, id, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Game;
