import { Routes, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { LandingPage } from "./Screens/LandingPage";
import { Auth } from "./Screens/Auth";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
