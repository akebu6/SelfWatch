import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

//https://www.pluralsight.com/guides/extracting-input-from-a-form-with-reactjs
// const handleActivityDataChanged = (event, update) => {
//   const activity = this.state.activity;
//   const modifiedValue = event.target.value;
//   activity.update = modifiedValue;
//   this.setState({
//     activity: activity,
//   });
// };

// const handleButtonClicked = () => {
//   console.log(this.state.activity);
// };

export class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        name: props.taskName,
        repeat: false,
        reminders: false,
        frequency: null,
        pause: false,
        delete: false,
      },
    };
  }

  handleActivityDataChanged = (event, update) => {
    const activity = this.state.activity;
    const modifiedValue = event.target.value;
    activity.update = modifiedValue;
    this.setState({
      activity: activity,
    });
  };

  handleButtonClicked = () => {
    console.log(this.state.activity);
  };

  render() {
    return (
      <>
        <Stack>
          <Form className="m-5">
            <Form.Group className="new-item" controlID="newItem.controlInput1">
              <Form.Label>Your activities' name</Form.Label>
              <Form.Control
                type="taskName"
                onChange={this.handleActivityDataChanged.bind(this, "taskName")}
                placeholder="Take a Nap"
                value={this.state.activity.repeat}
              />
              {["radio"].map((type) => (
                <div key={`your activity`} className="mb-3">
                  <Form.Check
                    type={type}
                    onChange={this.handleActivityDataChanged.bind(
                      this,
                      "repeat"
                    )}
                    id={`repeat`}
                    label={`One Time or Repeat?`}
                    value={this.state.activity.repeat}
                  />
                  <Form.Check
                    type={type}
                    id={`reminders`}
                    label={`Would you like Reminders?`}
                    onChange={this.handleActivityDataChanged.bind(
                      this,
                      "reminders"
                    )}
                  />
                  <Form.Check
                    type={type}
                    id={`frequency`}
                    label={`How Often?`}
                    onChange={this.handleActivityDataChanged.bind(
                      this,
                      "frequency"
                    )}
                  />
                  <Form.Check
                    type={type}
                    id={`your activity`}
                    label={`Pause?`}
                    onChange={this.handleActivityDataChanged.bind(
                      this,
                      "pause"
                    )}
                  />
                  <Form.Check
                    type={type}
                    id={`your activity`}
                    label={`Delete?`}
                    onChange={this.handleActivityDataChanged.bind(
                      this,
                      "delete"
                    )}
                  />
                </div>
              ))}
            </Form.Group>
          </Form>
        </Stack>
        <Link to="/selfcaretasks">
          <Button size="lg" onClick={this.handleButtonClicked.bind(this)}>
            Add Activity
          </Button>
        </Link>
      </>
    );
  }
}
