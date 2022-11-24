// import { useEffect } from "react";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import Link from "next/link";
import Employess from "../data/employees";
import Header from "../components/UI/Header/Header";
import classes from "../styles/index.module.css";
import { Fragment } from "react";
import MyChart from "../components/UI/Chart/Chart";
import Card from "../components/UI/Card/card";
import MessageIcon from "../components/icons/message-icon";
import LeaveIcon from "../components/icons/leave-icon";
import NewsletterIcon from "../components/icons/newsletter-icon";
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
        <div className={classes.chart}>
          <MyChart />
        </div>
        <div className={classes.activity}>
          <h2 className={classes.activityText}>Recent Activity</h2>
          <div className={classes.recent}>
            <div className={classes.day}>
              <h2>TODAY</h2>
            </div>
            <div className={classes.message}>
              <div className={classes.messageFlex}>
                <span>
                  <MessageIcon />
                </span>
                <h3>James Doe Approved Completed task</h3>
              </div>
              <p className={classes.view}>View -&gt;</p>
            </div>
            <div className={classes.banner}></div>
            <div className={classes.message}>
              <div className={classes.messageFlex}>
                <span>
                  <LeaveIcon />
                </span>
                <h3 style={{ color: "#475569", fontWeight: 400 }}>
                  Raymond Best and 3 others are on leave
                </h3>
              </div>
              <p className={classes.view}>View -&gt;</p>
            </div>
            <div className={classes.banner}></div>
          </div>
          <div className={classes.recent}>
            <div className={classes.day}>
              <h2>YESTERDAY</h2>
            </div>
            <div className={classes.message}>
              <div className={classes.messageFlex}>
                <span>
                  <NewsletterIcon />
                </span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 400 }}>
                  <span style={{ fontWeight: 500, color: "#1E293B" }}>
                    240+
                  </span>
                  <span style={{ color: "#475569", fontWeight: 400 }}>
                    users have subscribe to
                  </span>{" "}
                  <span style={{ fontWeight: 500, color: "#1E293B" }}>
                    {" "}
                    Newsletter #1
                  </span>
                </h3>
              </div>
              <p className={classes.view}>View -&gt;</p>
            </div>
            <div className={classes.banner}></div>
            <div className={classes.message}>
              <div className={classes.messageFlex}>
                <span>
                  <LeaveIcon />
                </span>
                <h3
                  style={{
                    color: "#475569",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                  }}>
                  Ikechukwu Smart was suspended by Chioma Ade
                </h3>
              </div>
              <p className={classes.view}>View -&gt;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
