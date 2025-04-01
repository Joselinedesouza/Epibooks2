import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Books from "../Horror/horror.json";

class Cards extends Component {
  state = {
    activeBooks: horror[0],
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Carousel
              onSlide={(i) => {
                console.log("funziona??", i);

                console.log(horror[i]);

                this.setState({
                  activeBoks: horror[i],
                });
              }}
            >
              {horror.map((Books) => {
                return (
                  <Carousel.Item key={horror.asin}>
                    <img
                      src={horror.img}
                      className="w-100"
                      alt={"immagine di " + horror.title}
                    />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <ListGroup>
              {this.state.activePasta.comments.map((recensione) => {
                return (
                  <ListGroup.Item key={recensione.id}>
                    {recensione.comment} - {recensione.rating}/5
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
