import React from "react";
import "./HomepageinnerSection.css";
import { Container, Row, Col } from "react-bootstrap";

const HomepageinnerSection = () => {
  return (
    <div className="homepage-inner">
      <div className="experience-unparalleled-comfor-parent">
        <Container>
          <Row>
            <Col>
              <div className="experience-unparalleled-comfor">
                <h5>Experience unparalleled comfort and luxury with us.</h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="indulge-in-the">
                <p>
                  Indulge in the epitome of unparalleled comfort and luxury at
                  Hotel PARK 45, meticulously crafted to be your perfect urban
                  retreat nestled in the vibrant heart of Zagreb, where
                  exceptional experiences await you
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomepageinnerSection;
