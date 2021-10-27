import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
  console.log(data);
  return (
    <div>
      <Container fluid style={{ padding: "6%", background: "blue" }}>
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              id={mov.id}
              key={mov.id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "2%" }}
            >
              <Card
                onClick={() => (window.location.href = "/movies/" + mov.id)}
                style={{ height: "250px", width: "250px" }}
              >
                <Card.Img
                  alt="movie"
                  style={{ height: "250px", width: "250px" }}
                  variant="top"
                  src={mov.image}
                />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>{mov.actor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AllMovies;
