import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../Shared/Loading/Loading";
import InfoCard from "../InfoCard/InfoCard";
import PayCard from "../PayCard/PayCard";
import Lottie from "react-lottie";
import payment from "../../../../animations/payment.json";

const Payment = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const [expire, setExpire] = React.useState(new Date());
  const [isInfoLoading, setIsInfoLoading] = useState(true);
  const { payId } = useParams();
  useEffect(() => {
    setIsInfoLoading(true);
    fetch(`https://droneium-api.onrender.com/orders/${payId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
        setIsInfoLoading(false);
      });
  }, [payId]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: payment,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (isInfoLoading) {
    return <Loading />;
  }
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 1,
      }}
    >
      {/* Order Info Card */}
      <InfoCard orderInfo={orderInfo} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Payment Card */}
          <PayCard expire={expire} setExpire={setExpire} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Lottie options={defaultOptions} height={"auto"} width={"auto"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
