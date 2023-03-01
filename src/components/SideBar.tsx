import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="pageA">pageA</Link>
        </li>
        <li>
          <Link to="pageB">pageB</Link>
        </li>
        <li>
          <Link to="pageC">pageC</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
