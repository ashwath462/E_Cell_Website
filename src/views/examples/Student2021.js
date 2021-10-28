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

export default function Student2021({isOpen, setIsOpen}) {
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
            <h2 className="title" >E-Cell Team 2021</h2>
            <Row>
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=18btc142@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
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
                        Head of Event Management,<br/>E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=18bsc117@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=18bit120@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=18bcs134@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
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
            </Row>
            <Row>
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=18bcs137@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
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
                        src={require("assets/img/Team2/GouravSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Gourav Thadhani</CardTitle>
                        <h6 className="card-category text-muted">
                        Head Coordinator, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc022@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/gourav-thadhani-72a6ba115/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/gourav_thadhani/"
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
                        src={require("assets/img/Team2/SaurabhSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Saurabh Datta</CardTitle>
                        <h6 className="card-category text-muted">
                        Head Coordinator, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc056@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/saurabh-datta-a7b649192/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/saurabh_datta22/"
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
                        src={require("assets/img/Team2/MrityunjaySir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mrityunjay Gupta</CardTitle>
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19bcs042@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/mrityunjay-gupta-117233192/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/__mrityunjay.__/"
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
                        src={require("assets/img/Team2/AkashSir.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Akash Chakrawarti</CardTitle>
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc001@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/akash-chakrawarti/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "#pablo" 
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
                        src={require("assets/img/Team2/JayeshSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Jayesh Bhade</CardTitle>
                        <h6 className="card-category text-muted">
                        Technical Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc030@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/jayeshbhade/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/jayesh.py/" 
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
                        src={require("assets/img/Team2/HarshSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Harsh Agrawal</CardTitle>
                        <h6 className="card-category text-muted">
                        Technical Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc025@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/harsh-agrawal-3229501aa/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://instagram.com/agrawal.harsh.30?utm_medium=copy_link" 
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
                        src={require("assets/img/Team2/KuldeepSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Kuldeep Gaur</CardTitle>
                        <h6 className="card-category text-muted">
                        Events & Marketing Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc034@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/kuldeep-gaur-294176194/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/death_me_kul/"
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
                        src={require("assets/img/Team2/PranjalMam.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pranjal Sahu</CardTitle>
                        <h6 className="card-category text-muted">
                        Events & PR Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc137@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/pranjal-sahu-8a70641b0/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/_apostrophe_s/" 
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
                        src={require("assets/img/Team2/SiddharthSir.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Siddharth Pathak</CardTitle>
                        <h6 className="card-category text-muted">
                        Media Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19bcs072@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/siddharth-pathak21/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/siddharth_pathak__/" 
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
                        src={require("assets/img/Team2/RuchiMam.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ruchi Tetwal</CardTitle>
                        <h6 className="card-category text-muted">
                        Media Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19bit144@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ruchi-tetwal-a42b7b177/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/_.ruchiii__/" 
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
                        src={require("assets/img/Team2/AkshatSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Akshat Mishra</CardTitle>
                        <h6 className="card-category text-muted">
                        Content Team Manager, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc002@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/akshat-mishra-8a0240196/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/just_another_random_guy_2/" 
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
                        src={require("assets/img/Team2/MihirSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mihir Jain</CardTitle>
                        <h6 className="card-category text-muted">
                        Content Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc132@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/akshat-mishra-8a0240196/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/mihir.jain19/" 
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
                        src={require("assets/img/Team2/ShreyaMam.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Shreya Sharma</CardTitle>
                        <h6 className="card-category text-muted">
                        Content Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc155@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/shreya-sharma-a71a61195/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/sharmaa_shreya/"
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
                        src={require("assets/img/Team2/sachinSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sachin Sharma</CardTitle>
                        <h6 className="card-category text-muted">
                        Public Relations Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc053@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sachin-sharma-673256198/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.instagram.com/iamsachin_09/"
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
                        src={require("assets/img/Team2/HarshitaMam.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Harshita Bhagat</CardTitle>
                        <h6 className="card-category text-muted">
                        Public Relations Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19bit022@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/harshitabhagat/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "https://www.instagram.com/_.harshita/" 
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
                        src={require("assets/img/Team2/AumSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Aum Mishra</CardTitle>
                        <h6 className="card-category text-muted">
                        Content Lead, E-Cell
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
                      href="https://mail.google.com/mail/u/0/?fs=1&to=19btc014@ietdavv.edu.in&tf=cm"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/aum-mishra-6602a51a1/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="linkedin"
                      href= "#pablo" 
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
