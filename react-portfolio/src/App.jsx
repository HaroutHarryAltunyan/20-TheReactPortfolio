import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // ✅ Correct import
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "100vh", 
          width: "100%",
          overflowX: "hidden",
          backgroundColor: "#f5f5f5"
        }}
      >
        <Header />
        
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%", 
            minHeight: "calc(100vh - 64px - 64px)", // Adjust for header/footer
            px: 3
          }}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;