import { Grid, Typography, Box } from "@mui/material";
import Project from "./Project";

function Portfolio() {
  const projects = [
    { title: "Project 1", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
    { title: "Project 2", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
    { title: "Project 3", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
    { title: "Project 4", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
    { title: "Project 5", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
    { title: "Project 6", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
  ];

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh", 
        width: "100%",
        textAlign: "center",
        backgroundColor: "#fff"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;