import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Layout } from "./components/Layout";

// Lazy pages or direct imports
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Physio from "./pages/Physio";
import Programs from "./pages/Programs";
import Coaches from "./pages/Coaches";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/physio" element={<Physio />} />
              <Route path="/pricing" element={<Programs />} />
              <Route path="/coaches" element={<Coaches />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
