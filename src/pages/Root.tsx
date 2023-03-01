import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Root = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Root;
