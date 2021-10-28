/*eslint-disable*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import bgvm from "../../assets/img/vision-mission.png";
// core components

function SectionIcons() {
  React.useEffect(() => {});
  return (
    <>
      <div className="section section-icons"
      >
        <Container fluid >
          <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon nc-icon nc-planet add-animation" />
                <i className="second-left-icon nc-icon nc-touch-id add-animation" />
                <i className="third-left-icon nc-icon nc-hat-3 add-animation" />
                <i className="fourth-left-icon nc-icon nc-tap-01 add-animation" />
                <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                <i className="seventh-left-icon nc-icon nc-world-2 add-animation" />
                <i className="eighth-left-icon nc-icon nc-settings add-animation" />
                <i className="ninth-left-icon nc-icon nc-bulb-63 add-animation" />
                <i className="tenth-left-icon nc-icon nc-circle-10 add-animation" />
              </div>
            </Col>
            <Col className="text-center" md="6">
              <h2 className="title revealOnScroll">About Us</h2>
              <h5 className="description" style={{color:"#34495e",fontWeight:400}} >
              "The science of today is the technology of tomorrow".
              At E-Cell, IET DAVV, we are determined to achieve this very goal. Entrepreneurs with technical
              backgrounds have a brilliant potential to innovate both on the technical and business fronts.
              E-Cell, IET DAVV, intends to foster such potential and provide them with all the possible support
              to convert their dreams into reality. We are here to support budding entrepreneurs who are new
              to this entrancing yet challenging field of business at every step.
              </h5>
              <br />
              <br />
              <h2 className="title revealOnScroll">Vision</h2>
              <h5 className="description" style={{color:"#34495e",fontWeight:400}}>          
              A budding entrepreneur never gives up these five landmarks- explore, create, volunteer, work
              hard and lead. We at E-Cell, IET DAVV, ensure that we pursue these landmarks with utmost
              sincerity and dedication. E-Cell, IET DAVV aims to ignite creative thinking and nurture
              entrepreneurial instincts in students. We toil earnestly to achieve this by conducting workshops,
              competitions and interactive sessions with eminent personalities who have made their names in
              business development. The ultimate vision of E-Cell, IET DAVV, is to create self-reliant students
              who have the capability of changing the world and benefit society at large.

              </h5>
              <br />
              <br />
              <h2 className="title revealOnScroll">Mission</h2>
              <h5 className="description" style={{color:"#34495e",fontWeight:400}}>
              To foster and sustain the spirit of entrepreneurship among students and provide them with the
              best possible platform to brainstorm and implement their ideas in the modern business world.
              </h5>
              {/* <Button
                className="btn-round mr-1"
                color="primary"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-right-icon nc-icon nc-bank add-animation" />
                <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                <i className="fourth-right-icon nc-icon nc-tv-2 add-animation" />
                <i className="fifth-right-icon nc-icon nc-map-big add-animation" />
                <i className="sixth-right-icon nc-icon nc-badge add-animation" />
                <i className="seventh-right-icon nc-icon nc-simple-add add-animation" />
                <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                <i className="ninth-right-icon nc-icon nc-lock-circle-open add-animation" />
                <i className="tenth-right-icon nc-icon nc-key-25 add-animation" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIcons;
