// import { Link } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import "./App.css";
//#TODO create type definition for Routes atleast that its a thing I suppose
// import Routes from "host/Routes";

// console.log("ROUTES", Routes);

export const FileRoute = {
  path: "/remote",
  component: App
};

export function App() {
  return (
    <div style={{ width: "100%", border: "1px solid green" }}>
      <h1 style={{ color: "white" }}>Remote</h1>
      {/* <Link to="/">Home from remote</Link>
      <Link to="/about">About from remote</Link> */}
    </div>
  );
}
