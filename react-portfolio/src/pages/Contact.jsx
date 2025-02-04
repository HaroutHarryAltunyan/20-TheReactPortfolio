// function Contact() {
//     return (
//       <section>
//         <h2>Contact Me</h2>
//         <form>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </section>
//     );
//   }
  
//   export default Contact;




  import { useState } from "react";
import { 
  TextField, Button, Typography, Box, 
  Card, CardContent, Container, Grid, Checkbox, FormControlLabel 
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";

function ContactUs() {
  const [formData, setFormData] = useState({ 
    firstName: "", lastName: "", email: "", phone: "", message: "", terms: false 
  });
  const [errors, setErrors] = useState({ 
    firstName: false, lastName: false, email: false, phone: false, message: false, terms: false 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure no empty fields & privacy policy checked
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || !formData.terms) {
      setErrors({
        firstName: !formData.firstName,
        lastName: !formData.lastName,
        email: !formData.email,
        phone: !formData.phone,
        message: !formData.message,
        terms: !formData.terms
      });
      return;
    }

    console.log("Form submitted:", formData);
    alert("Message Sent Successfully!");

    // Clear form after submission
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "", terms: false });
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
      <Typography variant="h6" color="primary" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h4" fontWeight="#1245a8" gutterBottom>
        Get in touch
      </Typography>
      <Typography variant="body1" color="#1245a8" gutterBottom>
        We'd love to hear from you. Please fill out this form.
      </Typography>

      {/* Contact Form Card */}
      <Card sx={{ width: "100%", borderRadius: 3, boxShadow: 5, mt: 3 }}>
        <CardContent>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            {/* First & Last Name Row */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={errors.firstName}
                  helperText={errors.firstName ? "First name is required" : ""}
                  InputProps={{
                    startAdornment: <AccountCircleIcon sx={{ mr: 1 }} />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={errors.lastName}
                  helperText={errors.lastName ? "Last name is required" : ""}
                  InputProps={{
                    startAdornment: <AccountCircleIcon sx={{ mr: 1 }} />
                  }}
                />
              </Grid>
            </Grid>

            {/* Email Input */}
            <TextField
              label="Email"
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

            {/* Phone Number Input */}
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              type="tel"
              placeholder="+1 (555) 000-0000"
              error={errors.phone}
              helperText={errors.phone ? "Phone number is required" : ""}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <PhoneIcon sx={{ mr: 1 }} />
              }}
            />

            {/* Message Input */}
            <TextField
              label="How can we help?"
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

            {/* Privacy Policy Checkbox */}
            <FormControlLabel
              control={
                <Checkbox 
                  checked={formData.terms} 
                  onChange={handleChange} 
                  name="terms" 
                  color="primary" 
                />
              }
              label="You agree to our friendly privacy policy"
              sx={{ display: "block", mb: 3 }}
            />

            {/* Submit Button */}
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

export default ContactUs;