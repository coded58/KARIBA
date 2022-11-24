// import { useEffect } from "react";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import SideBar from "../components/UI/SideBar/side-nav";
import Header from "../components/UI/Header/Header";
function HomePage() {
  // useEffect(() => {
  //   // Initial Materialize
  //   if (typeof window !== "undefined") {
  //     console.log("window.innerHeight", window.innerHeight);
  //   }
  //   M.AutoInit();
  //   console.log("window.innerHeight", window.innerHeight);
  // }, []);
  return (
    <div className='app'>
      <SideBar />
      <Header link='Dashboard' />
    </div>
  );
}
export default HomePage;
