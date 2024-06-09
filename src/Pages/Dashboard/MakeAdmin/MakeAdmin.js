import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    axios
      .put("https://droneium-api.onrender.com/users/admin", user, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 8,
        py: 8,
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0,0,0,0.6)",
      }}
    >
      <Typography variant="h4">Make An Admin</Typography>
      <form onSubmit={handleAdminSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            type="email"
            onBlur={handleOnBlur}
            label="Admin Email"
            variant="standard"
          />
        </Box>
        <Button sx={{ mb: 2 }} type="submit" variant="outlined">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!!</Alert>}
    </Container>
  );
};

export default MakeAdmin;
