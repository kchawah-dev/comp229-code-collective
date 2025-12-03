import teamLogo from "../assets/team-logo.png";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={teamLogo} alt="Team Logo" style={{ width: "200px" }} />
      <h1>Welcome to Code Collective</h1>
      <p>Build, manage, and grow your projects—all in one place.</p>
    </div>
  );

}
