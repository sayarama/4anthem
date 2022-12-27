import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About } from "./contents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
