import React, { Component, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

// export class NewItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activity: {
//         name: props.taskName,
//         repeat: false,
//         reminders: false,
//         frequency: null,
//         pause: false,
//         delete: false,
//       },
//     };
//   }

//   handleActivityDataChanged = (event, update) => {
//     const activity = this.state.activity;
//     const modifiedValue = event.target.value;
//     activity.update = modifiedValue;
//     this.setState({
//       activity: activity,
//     });
//   };

//   handleButtonClicked = () => {
//     console.log(this.state.activity);
//   };

//   render() {
//     return (
//       <>
//         <Stack>
//           <Form className="m-5">
//             <Form.Group className="new-item">
//               <Form.Label>Your activities' name</Form.Label>
//               <Form.Control
//                 type="text"
//                 onChange={this.handleActivityDataChanged.bind(this, "taskName")}
//                 placeholder="Take a Nap"
//                 value={this.state.activity.repeat}
//               />
//               {["radio"].map((type) => (
//                 <div key={`your activity`} className="mb-3">
//                   <Form.Check
//                     type={type}
//                     onChange={this.handleActivityDataChanged.bind(
//                       this,
//                       "repeat"
//                     )}
//                     id={`repeat`}
//                     label={`One Time or Repeat?`}
//                     value={this.state.activity.repeat}
//                   />
//                   <Form.Check
//                     type={type}
//                     id={`reminders`}
//                     label={`Would you like Reminders?`}
//                     onChange={this.handleActivityDataChanged.bind(
//                       this,
//                       "reminders"
//                     )}
//                   />
//                   <Form.Check
//                     type={type}
//                     id={`frequency`}
//                     label={`How Often?`}
//                     onChange={this.handleActivityDataChanged.bind(
//                       this,
//                       "frequency"
//                     )}
//                   />
//                   <Form.Check
//                     type={type}
//                     id={`your activity`}
//                     label={`Pause?`}
//                     onChange={this.handleActivityDataChanged.bind(
//                       this,
//                       "pause"
//                     )}
//                   />
//                   <Form.Check
//                     type={type}
//                     id={`your activity`}
//                     label={`Delete?`}
//                     onChange={this.handleActivityDataChanged.bind(
//                       this,
//                       "delete"
//                     )}
//                   />
//                 </div>
//               ))}
//             </Form.Group>
//           </Form>
//         </Stack>
//         <Link to="/selfcaretasks">
//           <Button size="lg" onClick={this.handleButtonClicked.bind(this)}>
//             Add Activity
//           </Button>
//         </Link>
//       </>
//     );
//   }
// }

export default function NewItem() {
  const [activity, setActivity] = useState({
    taskName: "",
    repeat: false,
    reminders: false,
    frequency: "",
    pause: false,
    delete: false,
  });

  const handleActivityDataChanged = (event, update) => {
    const modifiedValue = event.target.value;
    setActivity({
      ...activity,
      [update]: modifiedValue,
    });
  };

  const handleButtonClicked = (event) => {
    console.log(activity);
    console.log(event.target.value);
  };

  return (
    <>
      <Stack>
        <Form className="m-5">
          <Form.Group className="new-item">
            <Form.Label>Your activities' name</Form.Label>
            <Form.Control
              type="text"
              // a "capture pattern"
              onChange={(event) => {
                handleActivityDataChanged(event, "taskName");
              }}
              placeholder="Take a Nap"
              value={activity.taskName}
            />
            {["radio"].map((type) => (
              <div key={`your activity`} className="mb-3">
                <Form.Check
                  type={type}
                  onChange={(event) => {
                    handleActivityDataChanged(event, "repeat");
                  }}
                  id={`repeat`}
                  label={`One Time or Repeat?`}
                  value={activity.repeat}
                />
                <Form.Check
                  type={type}
                  id={`reminders`}
                  label={`Would you like Reminders?`}
                  value={activity.reminders}
                  onChange={(event) => {
                    handleActivityDataChanged(event, "reminders");
                  }}
                />
                <Form.Check
                  type={type}
                  id={`frequency`}
                  label={`How Often?`}
                  value={activity.frequency}
                  onChange={(event) => {
                    handleActivityDataChanged(event, "frequency");
                  }}
                />
                <Form.Check
                  type={type}
                  id={`your activity`}
                  label={`Pause?`}
                  value={activity.pause}
                  onChange={(event) => {
                    handleActivityDataChanged(event, "pause");
                  }}
                />
                <Form.Check
                  type={type}
                  id={`your activity`}
                  label={`Delete?`}
                  value={activity.delete}
                  onChange={(event) => {
                    handleActivityDataChanged(event, "delete");
                  }}
                />
              </div>
            ))}
          </Form.Group>
        </Form>
      </Stack>
      <Link to="/selfcaretasks">
        <Button size="lg" onClick={handleButtonClicked}>
          Add Activity
        </Button>
      </Link>
    </>
  );
}
