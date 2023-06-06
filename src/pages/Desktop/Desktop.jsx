import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DesktopButtons } from "../../Components/Desktop/DesktopButtons";
import { DesktopNotifications } from "../../Components/Desktop/DesktopNotifications";
import { DesktopSchedule } from "../../Components/Desktop/DesktopSchedule";
import { ApplicationTutorial } from "../../Components/Shared/ApplicationTutorial/ApplicationTutorial";

export const Desktop = () => {
  const [showTutorial, setShowTutorial] = useState(true);

  const closeTutorial = (e) => {
    e.preventDefault();
    setShowTutorial(false);
    localStorage.setItem("tutorial", "hide");
  };

  useEffect(() => {
    if (localStorage.getItem("tutorial") !== null) {
      setShowTutorial(false);
    }
  }, [showTutorial]);

  return (
    <>
      {showTutorial && <ApplicationTutorial closeTutorial={closeTutorial} />}
      <section className="desktop">
        <Container fluid className="h-25 pr-0 pl-0 mb-1">
          <Row>
            <DesktopButtons />
            <DesktopNotifications />
          </Row>
        </Container>
        <DesktopSchedule />
      </section>
    </>
  );
};
