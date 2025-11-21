import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProjectList from "./pages/Projects/ProjectList";
import CreateProject from "./pages/Projects/CreateProject";
import EditProject from "./pages/Projects/EditProject";
import ProjectDetails from "./pages/Projects/ProjectDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/create" element={<CreateProject />} />
        <Route path="/projects/:id/edit" element={<EditProject />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;