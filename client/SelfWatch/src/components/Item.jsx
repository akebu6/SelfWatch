import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export function Item() {
  return (
    <Container>
      <h3>Item variable name</h3>
        <Stack>
          {["checkbox", "radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />

              <Form.Check
                disabled
                type={type}
                label={`disabled ${type}`}
                id={`disabled-default-${type}`}
              />
            </div>
          ))}
        </Stack>
    </Container>
  );
}
