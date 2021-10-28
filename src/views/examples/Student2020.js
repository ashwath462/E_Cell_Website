import React, {useState} from "react";
import Student2019 from "./Student2019";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

export default function Student2020({isOpen, setIsOpen}) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });
  return (
    <>
      
          <Container>
            <h2 className="title">E-Cell Team 2020</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AyushSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ayush Bhatia</CardTitle>
                        <h6 className="card-category text-muted">
                          President, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/ayush.bhatia.35977"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/bhatiaayush/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/RithikSir.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Rithik Panditha</CardTitle>
                        <h6 className="card-category text-muted">
                        Head of Event Management, <br/>E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/profile.php?id=100017529305389"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/rithik-pandita-3424b0197/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/rithik_pandita/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/GauravSir.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Gaurav Patil</CardTitle>
                        <h6 className="card-category text-muted">
                        Finance Head, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/gaurav.patil.5891"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/gaurav-patil-10336917a/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/patil___1111/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/DhananjaySir.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Dhananjay Purohit</CardTitle>
                        <h6 className="card-category text-muted">
                          Technical Head, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/dhananjay.purohit.984"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/dhananjaypurohit/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/dhananjaypurohit7/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              </Row>
              <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/MansiMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mansi Dalal</CardTitle>
                        <h6 className="card-category text-muted">
                        Head of Public Relations,<br/>E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/mansi.dalal.90"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/mansi-dalal21/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/mansi_dalal21/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/NikitaMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nikita Shrivastava</CardTitle>
                        <h6 className="card-category text-muted">
                        Marketing Head, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/imniki.03"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/nikita-shrivastava-zs/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/_nikita.03_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AishwaryaMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Aishwarya Agarwal</CardTitle>
                        <h6 className="card-category text-muted">
                        Head of Creative Writing,<br/>E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/aishwarya.agrawal.336333"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/aishwarya-agrawal-67a355137/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/21_aishwarya/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/PranavSir.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pranav Gupta</CardTitle>
                        <h6 className="card-category text-muted">
                        Design Lead, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/profile.php?id=100011381608347"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/pranav3105/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/__xprabhu_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/DivanshuSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Divanshu Basantani</CardTitle>
                        <h6 className="card-category text-muted">
                        Events Lead, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/db98936"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/divanshu-basantani-91537517a/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/_behind.that.lens_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/PrabhleenMam.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Prabhleen Kaur</CardTitle>
                        <h6 className="card-category text-muted">
                        Content Lead E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/PriyanshiMam.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Priyanshi Agrawal</CardTitle>
                        <h6 className="card-category text-muted">
                        Public Relation Lead,<br/> E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/priyanshi.agrawal.9655806"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/priyanshiagrawal22/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/p.r.i.y.an.s.h.i._007/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team2/DheerajSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Dheeraj Bakoriya</CardTitle>
                        <h6 className="card-category text-muted">
                        Media Lead E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.facebook.com/dheeraj.bakoriya.7"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/dheeraj-kumar-bakoriya-69998918b/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/dheeraj_bakoriya/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        
    </>
  );
}
