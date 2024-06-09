import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isChange, setIsChange] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://droneium-api.onrender.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [isChange, user.email]);
  if (isLoading) {
    return <Loading />;
  }

  const handleCancel = (id) => {
    setIsChange(false);
    if (window.confirm("Want To Cancel the Order?")) {
      axios
        .delete(`https://droneium-api.onrender.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setIsChange(true);
          } else {
            setIsChange(false);
          }
        });
    }
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Customer Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Phone Number
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Product Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Product Price
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                address
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((drone) => (
              <TableRow
                key={drone._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drone.name}
                </TableCell>
                <TableCell align="right">{drone.email}</TableCell>
                <TableCell align="right">{drone.phone}</TableCell>
                <TableCell align="right">{drone.DroneName}</TableCell>
                <TableCell align="right">${drone.price}</TableCell>
                <TableCell align="right">{drone.address}</TableCell>
                <TableCell align="right">{drone.status}</TableCell>

                <TableCell align="right">
                  <Button
                    onClick={() => handleCancel(drone._id)}
                    variant="contained"
                    color="error"
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyOrders;
