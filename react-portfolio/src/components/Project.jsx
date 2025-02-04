import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";

function Project({ title, image, deployed, repo }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Button 
          size="small" 
          href={deployed} 
          target="_blank" 
          variant="contained" 
          color="primary"
        >
          Live Demo
        </Button>
        <Button 
          size="small" 
          href={repo} 
          target="_blank" 
          variant="outlined" 
          color="secondary"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;