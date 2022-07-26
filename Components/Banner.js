import React from "react";
import { Row, Col } from "react-bootstrap";
function Banner() {
  return (
    <div>
      <Row>
        <Col xl={6} lg={12} className="img-container">
          <div className="text-container">
            <h1 className="banner-title">Keep your ideas safe!</h1>
            <h4 className="quote-text">“Everything begins with an idea”</h4>
            <p className="quote-autor"> - Earl Nighttingale -</p>
          </div>
        </Col>

        <Col xl={6} lg={12} className="img-container">
          <img
            src="https://ouch-cdn2.icons8.com/N8ObohzqpfyhIC5yeaELq4eFYwvUPDOaXgw_LksV_5w/rs:fit:811:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDgv/YmUxNjRjZTgtMTFi/MC00Mjc1LThmZWYt/ZmNlOTc2YTE2MzM3/LnN2Zw.png"
            alt=""
            className="banner-img"
            fluid="true"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
