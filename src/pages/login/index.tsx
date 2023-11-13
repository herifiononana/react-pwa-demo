import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      Login page
      <Button onClick={() => navigate("/home")}>Login</Button>
    </div>
  );
}

export default Login;
