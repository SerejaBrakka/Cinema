import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div style={{ color: "white" }}>
      Sorry, page not found, go to <Link to="/">HomePage</Link>
    </div>
  );
};

export default NotFoundPage;
