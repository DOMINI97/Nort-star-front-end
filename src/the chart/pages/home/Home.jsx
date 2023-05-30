import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import "./home.scss";

const Home = () => {
  return (
    <div className="home pricing pt-0" id="pricing">
      <div className="homeContainer ">
        <div className="widgets row gy-4 d-flex justify-content-between container">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="panding" />
        </div>
        <div className="widgets row gy-4 d-flex justify-content-between container ">
          <Widget type="claim" />
          <Widget type="employee" />
          <Widget type="appuser" />
          <Widget type="balance" />
        </div>
        <div className="widgets row gy-4 d-flex justify-content-between container">
          <Featured />
          <Chart className="" title="Last 12 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
