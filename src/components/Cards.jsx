import { Col, Container, Row, Carousel } from "react-bootstrap";
import horror from "../Horror/horror.json";
import { Component } from "react";

class Cards extends Component {
  state = {
    activeBooks: horror[0],
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Carousel
              onSlide={(i) => {
                console.log("funziona??", i);

                console.log(horror[i]);

                this.setState({
                  activeBooks: horror[i],
                });
              }}
            >
              {horror.map((horror) => {
                return (
                  <Carousel.Item key={horror.asin}>
                    <img src={horror.img} alt={"immagine di " + horror.title} />
                    <h3>{horror.title}</h3>
                    <p>€ {horror.price} </p>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
