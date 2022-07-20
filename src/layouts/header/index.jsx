import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import "./style.scss";
const PageHeader = () => {
  return (
    <header className="nav">
      <Box
        display="flex"
        justifyContent={"space-between"}
        style={{ margin: "auto" }}
      >
        <Box>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Box>
        <Box>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/register">siginup</NavLink>
        </Box>
      </Box>
    </header>
  );
};
export default PageHeader;
