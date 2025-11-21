import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    api.get(`/projects/${id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(`/projects/${id}`, { title, description });
    alert("Project updated!");
    navigate(`/projects`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Project</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textbox}
        />
        <button style={styles.button}>Save</button>
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