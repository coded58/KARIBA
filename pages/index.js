// import { useEffect } from "react";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import Link from "next/link";
import Employess from "../data/employees";
import Header from "../components/UI/Header/Header";
import classes from "../styles/index.module.css";
import { Fragment } from "react";
import Card from "../components/UI/Card/card";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Header link='Dashboard' />
      <div className={classes.container}>
        <div className={classes.topContainer}>
          <div className={classes.top}>
            <div className={classes.topText}>
              <h2>Overview</h2>
              <p>Monday 14th November, 2022</p>
            </div>
          </div>
          <div className={classes.topBtn}>
            <img src='/images/filter.png' alt='filter jpeg' />
            <Link href='/'>
              <a className={classes.btn}>
                <img src='/images/cross.png' />
                Add View
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.employee}>
          {Employess.map((employee) => (
            <Card
              key={employee.id}
              title={employee.title}
              icon={employee.icon}
              count={employee.count}
            />
          ))}
        </div>
      </div>
      <div>hellloo</div>
    </div>
  );
}
export default HomePage;
