import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductService.css";

const ProductService = () => {
  return (
    <div className=" mt-5 text-white bg-secondary p-5">
      <Container>
        <Row className="product-information row-cols-1 row-cols-lg-2">
          <Col>
            <img
              className="product-img"
              src="https://i.ibb.co/Xbzb761/mother-with-daughter-grocery-store.jpg"
              alt=""
              srcset=""
            />
          </Col>
          <Col>
            <div className="mt-2">
              <h2>The Perfect Produce Depvery Service</h2>
              <ul>
                <p>✅ No membership or subscription required.</p>
                <p>
                  ✅ No need to be home for depvery. Our stay-fresh packaging
                  keeps your produce cool until you're home to unpack it.
                </p>
                <p>
                  ✅ Over 100 individual items and mixed boxes to choose from.
                  The possibipties are endless!
                </p>
                <p>
                  ✅ Midwest family-owned company proudly serving Iowa and
                  surrounding states since 2018.
                </p>
                <p>
                  ✅ 100% customer satisfaction guarantee. Our team is committed
                  to resolving any issue you may have with your order.
                </p>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default ProductService;
