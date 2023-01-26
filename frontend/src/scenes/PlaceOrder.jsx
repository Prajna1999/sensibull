import React from "react";

import { Navbar, OrderCard } from "../components/barrel";

import { Box, useMediaQuery } from "@mui/material";

import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

function PlaceOrderCard() {
  return <OrderCard />;
}
export default PlaceOrderCard;
