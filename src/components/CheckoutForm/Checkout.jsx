import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

const Checkout = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h4">Thanks for Shopping </Typography>
      <br />
      <Typography variant="h6">We Hope You come back soon</Typography>
    </Container>
  );
};

export default Checkout;
