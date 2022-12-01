import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Favs() {
  const jobs = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        <h1> Favorites</h1>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {jobs.map((job, i) => (
              <Row key={i} className="my-4 align-items-center">
                <Col xs={1}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVS",
                        payload: i,
                      });
                    }}
                  >
                    Remove
                  </Button>
                </Col>
                <Col>
                  <h3>{job.data.title}</h3>
                  <Row>
                    <Col>Category: {job.data.category}</Col>
                    <Col>
                      <Link to={`/${job.data.company_name}`}>
                        Company Name: {`job.data.company_name`}
                      </Link>
                    </Col>
                    <Col>
                      <a href={job.data.url}>Link</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
