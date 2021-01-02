/* File Description */

/* Local Imports */

/* Third Party Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    border: "2px solid white",
    backgroundColor: "#002B52",
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className="section-heading">
      <h1>Hello there</h1>
    </div>
  );
}
