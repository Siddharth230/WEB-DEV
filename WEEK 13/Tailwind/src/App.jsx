import "./App.css";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Logo } from "./components/logo";
import { Otp } from "./components/otp";
import { Description, Heading } from "./components/text";

function App() {
  return (
    <div className="h-screen bg-blue-800 text-white">
      <Otp number={4} />
    </div>
  );
}

export default App;
