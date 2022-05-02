import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import banner4 from "../../../images/banner/banner4.jpg";
import banner5 from "../../../images/banner/banner5.jpg";
import banner6 from "../../../images/banner/banner6.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner5} alt="Third slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner6} alt="Third slide" />

        <Carousel.Caption>
          <h3>Welcome To My Fruits Warehouse Management Websites</h3>
          <Nav.Link as={Link} to="/manage">
            <Button variant="info fw-bold">MANAGE ITEM</Button>
          </Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;