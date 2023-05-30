/* eslint-disable no-lone-blocks */
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import ListExpense from "./ListExpense";
// import { useRef, useState, useEffect } from "react";
// import { useAddNewExpenseMutation } from "./expenseApiSlice";

export default function Expense() {
  //   const userRef = useRef();
  //   const errRef = useRef();
  //   const [errMsg, setErrMsg] = useState("");
  //   const [stationExp, setStationExp] = useState("");
  //   const [paidBy, setPaidBy] = useState("");
  //   const [expTitle, setExpTitle] = useState("");
  //   const [expAmount, setExpAmount] = useState("");

  /* 
 
  const [addNewExpense, { isLoading }] = useAddNewExpenseMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [stationExp, paidBy, expTitle, expAmount]);

  const onSubmitClicked = async (e) => {
    e.preventDefault();

    try {
      await addNewExpense({
        stationExp,
        paidBy,
        expTitle,
        expAmount,
      }).unwrap();

      setStationExp("");
      setPaidBy("");
      setExpTitle("");
      setExpAmount("");

      // localStorage.setItems('token',JSON.stringify(accessToken))
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Some information missing");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Registration fails");
      }
      errRef.current.focus();
    }
  };

  const onSationExpChanged = (e) => setStationExp(e.target.value);
  const onsetPaidByChanged = (e) => setPaidBy(e.target.value);
  const onsetExpTitleChanged = (e) => setExpTitle(e.target.value);
  const onsetExpAmountChanged = (e) => setExpAmount(e.target.value);
*/
  {
    /* Wiget code start */
  }

  let data;

  // Temporary
  const amount = 100;
  const diff = 20;

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

      {
        /* Wiget code end */
      }
  }
  return (
    <Box textAlign="center" marginTop="5px">
      <div style={{ backgroundColor: "#D0D3D4" }}>
        <Typography color="#626567" variant="h5 ">
          STATION EXPENSE
        </Typography>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& button": { m: 1, width: "20ch", background: "#D0D3D4" },

          border: 1,
          boxShadow: 5,
          borderColor: "#B3B6B7",
        }}
        marginTop="100"
        noValidate
        autoComplete="off"
      >
        <div className="widget">
          <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "PKR"} {amount}
            </span>
            <span className="link">{data.link}</span>
          </div>
        </div>
      </Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}
