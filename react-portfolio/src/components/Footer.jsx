import { Box, Typography, Link, Container } from "@mui/material";

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: "#333", 
        color: "white", 
        textAlign: "center", 
        py: 2, 
        mt: "auto",
        width: "100%",
        position: "relative",
        bottom: 0
      }}
    >
      <Container>
        <Typography variant="body2">© 2025 Harout Altunyan</Typography>
        <Box sx={{ mt: 1 }}>
          <Link href="https://github.com/yourgithub" target="_blank" sx={{ mx: 1, color: "white", textDecoration: "none" }}>
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/yourlinkedin" target="_blank" sx={{ mx: 1, color: "white", textDecoration: "none" }}>
            LinkedIn
          </Link>
          <Link href="https://stackoverflow.com/users/yourid" target="_blank" sx={{ mx: 1, color: "white", textDecoration: "none" }}>
            Stack Overflow
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;