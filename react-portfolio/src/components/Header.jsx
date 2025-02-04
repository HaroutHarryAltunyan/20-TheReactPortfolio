import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1245a8", width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Harout Altunyan
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">About Me</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;