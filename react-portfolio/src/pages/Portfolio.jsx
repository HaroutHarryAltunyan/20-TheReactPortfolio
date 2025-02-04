function Portfolio() {
    return (
      <section>
        <h2>My Projects</h2>
        <p>Here are some of my projects.</p>
      </section>
    );
  }
  
  export default Portfolio;








//   import { Grid, Typography, Container } from "@mui/material";
// import Project from "./Project";

// function Portfolio() {
//   const projects = [
//     { title: "Project 1", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//     { title: "Project 2", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//     { title: "Project 3", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//     { title: "Project 4", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//     { title: "Project 5", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//     { title: "Project 6", image: "/path-to-image.jpg", deployed: "#", repo: "#" },
//   ];

//   return (
//     <Container 
//       maxWidth="lg" 
//       sx={{ 
//         display: "flex", 
//         flexDirection: "column", 
//         alignItems: "center", 
//         justifyContent: "center", 
//         minHeight: "100vh",
//         textAlign: "center"
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Portfolio
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Project {...project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Portfolio;