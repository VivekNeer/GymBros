import React from "react";
import { Link } from "react-router-dom";
import h from "../assets/Styles/homepage.module.css";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
					<CatchingPokemonIcon />
					</IconButton>
        </Toolbar>
      </AppBar>
      <h1 className={h.test}>Welcome to Your Social Networking App!</h1>
      <Button variant="contained">Hello world</Button>;
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;
