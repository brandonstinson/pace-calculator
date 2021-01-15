import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Calculator } from "./Calculator";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      fontSize: "10px",
    },
    title: {
      fontSize: "3em",
      margin: "1em 0",
      fontWeight: 700,
      textAlign: "center",
    },
  })
);

export const App: React.FC = () => {
  const { app, title } = useStyles();
  return (
    <div className={app}>
      <div className={title}>Pace Calculator</div>
      <Calculator />
    </div>
  );
};
