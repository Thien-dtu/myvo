import React from "react";
import { Link } from "react-router-dom";

function DisplayError() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default DisplayError;
