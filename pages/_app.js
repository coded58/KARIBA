import "../styles/globals.css";
import SideBar from "../components/UI/SideBar/side-nav";
import Header from "../components/UI/Header/Header";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className='app'>
        <SideBar />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
