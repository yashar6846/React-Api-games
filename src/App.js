import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gameActions";
import Game from "./components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_imge}
          />
        ))}
      </Games>
    </GameList>
  );
}
const GameList = motion.div``;
const Games = motion.div``;

export default App;
