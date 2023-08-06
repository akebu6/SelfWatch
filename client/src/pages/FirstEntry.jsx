import { Link } from "react-router-dom";

export default function FirstEntry() {
  return (
    <>
      <h2>Looks like you haven't entered a self care routine</h2>
      <li>
        <Link to="/new_item">Let's do that!</Link>
      </li>
    </>
  );
}
