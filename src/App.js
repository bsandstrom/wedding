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
    </Routes>
  );
}

export default App;
