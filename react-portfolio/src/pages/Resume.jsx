import { Typography, Button, List, ListItem, ListItemText, Box } from "@mui/material";

function Resume() {
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
        Resume
      </Typography>
      <Button variant="contained" color="primary" href="/path-to-your-resume.pdf" download sx={{ mb: 3 }}>
        Download Resume
      </Button>
      <Typography variant="h5" gutterBottom>
        Proficiencies
      </Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <List>
          <ListItem>
            <ListItemText primary="React.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Node.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="MongoDB" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Resume;