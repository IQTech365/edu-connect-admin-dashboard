import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
// import Main from "./components/main/Main";
import Sidebar from "./components/side-bar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className=" flex">
        <div className="w-[0] md:w-[10%] lg:w-[16%]" >
          <Sidebar />
        </div>
        <div className="w-[100%] md:w-[90%] lg:w-[84%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
