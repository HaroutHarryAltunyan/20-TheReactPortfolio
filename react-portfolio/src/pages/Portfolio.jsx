import { Grid, Typography, Container } from "@mui/material";
import Project from "../components/Project"; // Corrected import

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

function Portfolio() {
  const projects = [
    { 
      title: "Project 1", 
      image: project1, 
      deployed: "https://example.com/project1", 
      repo: "https://github.com/user/project1" 
    },
    { 
      title: "Project 2", 
      image: project2, 
      deployed: "https://example.com/project2", 
      repo: "https://github.com/user/project2" 
    },
    { 
      title: "Project 3", 
      image: project3, 
      deployed: "https://example.com/project3", 
      repo: "https://github.com/user/project3" 
    },
    { 
      title: "Project 4", 
      image: project4, 
      deployed: "https://example.com/project4", 
      repo: "https://github.com/user/project4" 
    },
    { 
      title: "Project 5", 
      image: project5, 
      deployed: "https://example.com/project5", 
      repo: "https://github.com/user/project5" 
    },
    { 
      title: "Project 6", 
      image: project6, 
      deployed: "https://example.com/project6", 
      repo: "https://github.com/user/project6" 
    },
  ];

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh",
        textAlign: "center",
        padding: 4
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Portfolio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio;