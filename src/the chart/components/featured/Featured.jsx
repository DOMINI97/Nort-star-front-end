import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured ">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth="5"
            styles={buildStyles({
              pathColor: `rgba(123, 125, 125,0.8)`,
              textColor: "#7b7d7d",
            })}
          />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">PKR 450</p>
        <p className="desc">
          Previous transcations processing. Last Payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">PKR12.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">PKR10.7k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">PKR52.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
