import React from "react";
import { Card, Button, Form} from "react-bootstrap";
import "./intro.css"

export default function index() {
  return (
    <Card>
      <Card.Header as="h5"></Card.Header>
      <Card.Body className="card-body">
        <Card.Title>Google Books Search</Card.Title>
        <Card.Text>Search For and Save Books of Interest</Card.Text>
        <Form.Group controlId="formGroupEmail" className="input-books">
          <Form.Control type="input" placeholder="search for books..." />
          <Button variant="primary">Search</Button>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
