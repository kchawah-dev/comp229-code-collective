import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Correct backend route
      await api.post("/api/projects", { title, description });

      alert("Project created!");
      navigate("/projects");
    } catch (error) {
      console.error(error);
      alert("Failed to create project.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textbox}
        />
        <button type="submit" style={styles.button}>Create Project</button>
      </form>
    </div>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", width: "300px" },
  input: { padding: "10px", marginBottom: "10px" },
  textbox: { padding: "10px", marginBottom: "10px", height: "100px" },
  button: { padding: "10px", background: "#333", color: "white", border: "none" },
};
