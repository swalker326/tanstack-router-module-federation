import { FileRoute, Link } from "@tanstack/react-router";
//#TODO create type definition for Routes atleast that its a thing I suppose
// import Routes from "host/Routes";

export const route = new FileRoute('remote/').createRoute({
  component: () => (
    <div style={{ width: "100%", border: "1px solid green" }}>
      <h1 style={{ color: "white" }}>Remote</h1>
      {/* Links break the remote */}
      <Link to="/">Home from remote</Link>
      {/* <Link to="/about">About from remote</Link> */}
    </div>
  )
});
