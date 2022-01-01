import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Story from "./pages/Story";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/registry" element={<Home />} />
    </Routes>
  );
}

export default App;
