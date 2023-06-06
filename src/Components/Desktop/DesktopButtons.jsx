import React from "react";
import { Col } from "react-bootstrap";
import { DesktopButton } from "./DesktopButton";

export const DesktopButtons = () => {
  return (
    <Col className="col-12 col-md-5 col-xl-5 desktop__buttons-wrapper">
      <DesktopButton name="przepis" direction="/schedule-your-meal/recipes" />
      <DesktopButton name="plan" direction={"/schedule-your-meal/schedule"} />
      <DesktopButton name="zakupy" direction="/schedule-your-meal/shopping" />
    </Col>
  );
};
