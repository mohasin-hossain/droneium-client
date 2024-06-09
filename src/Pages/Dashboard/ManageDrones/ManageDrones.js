import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ManageDrones = () => {
  const [drones, setDrones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://droneium-api.onrender.com/drones")
      .then((res) => res.json())
      .then((data) => {
        setDrones(data);
        setIsLoading(false);
      });
  }, [isDeleted]);
  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id) => {
    setIsDeleted(false);
    if (window.confirm("Want To Delete the Drone?")) {
      axios
        .delete(`https://droneium-api.onrender.com/drones/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Drone Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Image
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Description
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drones.map((drone) => (
            <TableRow
              key={drone._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {drone.name}
              </TableCell>
              <TableCell align="right">${drone.price}</TableCell>
              <TableCell align="right">
                <img src={drone.img} width="150px" alt={drone.name} />
              </TableCell>
              <TableCell align="right">{drone.description}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleDelete(drone._id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageDrones;
