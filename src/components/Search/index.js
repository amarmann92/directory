import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Search({ search }) {
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={(e) => search(e, formData)}>
        <Form.Group className="row" controlId="formBasicEmail">
          <Form.Control
            className="col-8 m-2"
            type="text"
            placeholder="Search by name..."
            onChange={handleChange}
          />
          <Button className="col-2 m-2" variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search;
