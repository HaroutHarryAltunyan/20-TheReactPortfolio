import { useState } from "react";
import { 
  TextField, Button, Typography, Box, 
  Card, CardContent, Container 
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Clear errors when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Ensure no empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({
        name: !formData.name,
        email: !formData.email,
        message: !formData.message
      });
      return;
    }
    
    console.log("Form submitted:", formData);
    alert("Message Sent Successfully!");
    
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh",
        textAlign: "center"
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      {/* Contact Form Card */}
      <Card sx={{ width: "100%", borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              error={errors.name}
              helperText={errors.name ? "Name is required" : ""}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <AccountCircleIcon sx={{ mr: 1 }} />
              }}
            />

            <TextField
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
              error={errors.email}
              helperText={errors.email ? "Valid email is required" : ""}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1 }} />
              }}
            />

            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              error={errors.message}
              helperText={errors.message ? "Message cannot be empty" : ""}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: <MessageIcon sx={{ mr: 1, alignSelf: "flex-start", mt: 1 }} />
              }}
            />

            <Button 
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.2,
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#125ea5" }
              }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contact;