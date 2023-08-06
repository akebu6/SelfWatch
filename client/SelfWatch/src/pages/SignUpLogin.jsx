import { Form, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUpLogin() {
  const [activity, setActivity] = useState({
    userName: "",
    password: "",
  });

  const handleActivityDataChanged = (event, update) => {
    const modifiedValue = event.target.value;
    setActivity({
      ...activity,
      [update]: modifiedValue,
    });
  };

  const handleButtonClicked = () => {
    console.log(activity);
  };

  return (
    <Stack>
      <Form>
        <Form.Group className="login">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleActivityDataChanged(e, "userName")}
            placeholder="Your preferred name"
            value={activity.userName}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => handleActivityDataChanged(e, "password")}
            placeholder="A secure password"
            value={activity.password}
          />
        </Form.Group>
      </Form>
      <Link to="/selfcaretasks">
        <Button size="lg" onClick={handleButtonClicked}>
          Log Me In
        </Button>
      </Link>
    </Stack>
  );
}
