import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Navigate, Route } from "react-router-dom";
import { Component } from "react";

class SelfCareTasks extends Component {
  render() {
    return (
      <Route>
        {/* I want a dynamic list with boolean check boxes for each element
//         I want there to be two lists side by side in the home page */}
        <Row className="d-flex">
          <div>
            <h3>TLC To-do's</h3>
            <Form>
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
            </Form>
          </div>
          <div>
            <h3>Past Joys</h3>
            <Form>
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
            </Form>
          </div>
        </Row>
      </Route>
    );
  }
}

export default SelfCareTasks;

// export function SelfCareTasks() {
//   return (
//     <>
//       <h3>SelfCareTasks</h3>
// //       {/* I want a dynamic list with boolean check boxes for each element
// //         I want there to be two lists side by side in the home page */}
//       <Row className="d-flex">
//         <div>
//           <h3>TLC To-do's</h3>
//           <Form>
//             {["checkbox", "radio"].map((type) => (
//               <div key={`default-${type}`} className="mb-3">
//                 <Form.Check // prettier-ignore
//                   type={type}
//                   id={`default-${type}`}
//                   label={`default ${type}`}
//                 />

//                 <Form.Check
//                   disabled
//                   type={type}
//                   label={`disabled ${type}`}
//                   id={`disabled-default-${type}`}
//                 />
//               </div>
//             ))}
//           </Form>
//         </div>
//         <div>
//           <h3>Past Joys</h3>
//           <Form>
//             {["checkbox", "radio"].map((type) => (
//               <div key={`default-${type}`} className="mb-3">
//                 <Form.Check // prettier-ignore
//                   type={type}
//                   id={`default-${type}`}
//                   label={`default ${type}`}
//                 />

//                 <Form.Check
//                   disabled
//                   type={type}
//                   label={`disabled ${type}`}
//                   id={`disabled-default-${type}`}
//                 />
//               </div>
//             ))}
//           </Form>
//         </div>
//       </Row>
//     </>
//   );
// }
