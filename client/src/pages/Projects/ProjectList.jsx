import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
   const res = await api.get("/api/projects");   // <-- FIXED
   setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await api.delete(`/api/projects/${id}`);      // <-- FIXED
    loadProjects();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Projects</h2>
      <Link to="/projects/create">
        <button style={styles.createButton}>+ Add New Project</button>
      </Link>

      {projects.map((p) => (
        <div key={p._id} style={styles.card}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <Link to={`/projects/${p._id}`}>View</Link> |{" "}
          <Link to={`/projects/${p._id}/edit`}>Edit</Link> |{" "}
          <button onClick={() => deleteProject(p._id)} style={styles.delete}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px",
  },
  createButton: {
    padding: "10px",
    marginBottom: "20px",
  },
  delete: {
    color: "red",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};