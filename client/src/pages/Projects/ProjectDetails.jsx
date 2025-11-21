import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get(`/projects/${id}`).then((res) => {
      setProject(res.data);
    });
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <Link to={`/projects/${id}/edit`}>
        <button style={{ marginRight: "10px" }}>Edit</button>
      </Link>

      <Link to="/projects">
        <button>Back</button>
      </Link>
    </div>
  );
}