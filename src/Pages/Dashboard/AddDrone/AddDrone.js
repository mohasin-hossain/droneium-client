import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TextField, Typography, Box, Alert, AlertTitle } from "@mui/material";
import { NavLink } from "react-router-dom";

const AddDrone = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setSuccess(false);
    axios.post("https://droneium-api.onrender.com/drones", data).then((res) => {
      if (res.data.insertedId) {
        reset();
        setSuccess(true);
      }
    });
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ my: 2 }}>
          Add New Drone
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              width: 340,
              maxWidth: "100%",
            }}
          >
            <TextField
              sx={{ my: 2 }}
              fullWidth
              label="Drone Name"
              multiline
              {...register("name", {
                required: true,
              })}
              placeholder="Drone Name"
            />

            <br />
            <TextField
              sx={{ my: 2 }}
              fullWidth
              label="Image Url"
              multiline
              {...register("img", { required: true })}
              placeholder="Image url"
            />

            <br />
            <TextField
              sx={{ my: 2 }}
              fullWidth
              label="Drone Price"
              multiline
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
            />

            <br />
            <TextField
              sx={{ my: 2 }}
              fullWidth
              label="Description"
              multiline
              rows={4}
              {...register("description", { required: true })}
              placeholder="Description"
            />
            <br />
            <TextField
              sx={{ display: "flex", justifyContent: "center" }}
              type="submit"
              value="Add Drone"
            />
          </Box>
        </form>

        {success && (
          <Alert sx={{ my: 2 }} severity="success">
            <AlertTitle>Success</AlertTitle>
            New Drone is Succesfully Added —{" "}
            <NavLink to="/explore">Explore All Drones!</NavLink>
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default AddDrone;
