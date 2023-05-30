import "./widget.scss";
import Box from "@mui/material/Box";

const Widget = ({ type }) => {
  let data;

  // Temporary
  const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "BILLTIES",
        isMoney: false,
        link: "See all users",
      };
      break;
    case "order":
      data = {
        title: "CHALLAN",
        isMoney: false,
        link: "View all orders",
      };
      break;
    case "earning":
      data = {
        title: "DELIVERD BILLTIES",
        isMoney: false,
        link: "View net earnings",
      };
      break;
    case "panding":
      data = {
        title: "PANDING BILLTIES",
        isMoney: false,
        link: "See details",
      };
      break;
    case "balance":
      data = {
        title: "EXPENSE",
        isMoney: true,
        link: "See details",
      };
      break;
    case "claim":
      data = {
        title: "CLAIM AMOUNT",
        isMoney: true,
        link: "See details",
      };
      break;
    case "employee":
      data = {
        title: "NUMBER OF EMPLOYEES",
        isMoney: false,
        link: "See details",
      };
      break;
    case "appuser":
      data = {
        title: "APP USERS",
        isMoney: false,
        link: "See details",
      };
      break;
    default:
      break;
  }

  return (
    <Box className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "PKR"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </Box>
  );
};

export default Widget;
