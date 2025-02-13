import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
};

export default App;
