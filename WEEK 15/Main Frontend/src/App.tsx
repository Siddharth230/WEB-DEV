import { DashBoard } from "./pages/dashboard";
import { SignIn } from "./pages/signin";
import { Signup } from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
