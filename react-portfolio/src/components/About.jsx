import { Container, Typography, Avatar, Box } from "@mui/material";

function About() {
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
        backgroundColor: "#f5f5f5"
      }}
    >
      <Avatar src="/path-to-your-photo.jpg" alt="Your Name" sx={{ width: 150, height: 150, mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        Hello! I'm a web developer specializing in React. I enjoy building modern, 
        responsive, and user-friendly web applications.
      </Typography>
    </Box>
  );
}

export default About;