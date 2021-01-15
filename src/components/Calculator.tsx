import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";
import { TimeRow } from "./TimeRow";
import { PaceRow } from "./PaceRow";
import { DistanceRow } from "./DistanceRow";
import {
  timeHrState,
  timeMinState,
  timeSecState,
  paceMinState,
  paceSecState,
  distanceState,
} from "../recoil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      justifyContent: "center",
      fontSize: "2em",
    },
    card: {
      padding: "1em 2em",
    },
    cardContent: {
      display: "grid",
      gridGap: "2em",
      marginBottom: "1em",
    },
  })
);

export const Calculator: React.FC = () => {
  const { container, card, cardContent } = useStyles();

  const [timeHr, setTimeHr] = useRecoilState(timeHrState);
  const [timeMin, setTimeMin] = useRecoilState(timeMinState);
  const [timeSec, setTimeSec] = useRecoilState(timeSecState);
  const [paceMin, setPaceMin] = useRecoilState(paceMinState);
  const [paceSec, setPaceSec] = useRecoilState(paceSecState);
  const [distance, setDistance] = useRecoilState(distanceState);

  const [usedRows, setUsedRows] = React.useState<string[]>([]);

  const getUsedRows = React.useCallback(() => {
    let usedRows = [];
    if (timeHr || timeMin || timeSec) {
      usedRows.push("time");
    }
    if (paceMin || paceSec) {
      usedRows.push("pace");
    }
    if (distance) {
      usedRows.push("distance");
    }
    return usedRows;
  }, [timeHr, timeMin, timeSec, paceMin, paceSec, distance]);

  React.useEffect(() => {
    setUsedRows(getUsedRows());
  }, [timeHr, timeMin, timeSec, paceMin, paceSec, distance, getUsedRows]);

  const handleReset = () => {
    setTimeHr("");
    setTimeMin("");
    setTimeSec("");
    setPaceMin("");
    setPaceSec("");
    setDistance("");
  };

  const calculate = () => {};

  return (
    <div className={container}>
      <Card variant="outlined" className={card}>
        <CardHeader title="Complete any two rows to calculate the third" />
        <CardContent className={cardContent}>
          <TimeRow />
          <PaceRow />
          <DistanceRow />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={calculate}
            disabled={usedRows.length !== 2}
          >
            Calculate
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
